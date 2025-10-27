import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import { RootStackParamList, PhotoData } from '../types';
import Container from '../components/Container';
import Button from '../components/Button';
import { theme } from '../theme';
import { useAppStore } from '../store';
import {
  requestCameraPermission,
  requestMediaLibraryPermission,
} from '../utils/permissionUtils';
import {
  compressImage,
  generatePhotoId,
  cachePhoto,
} from '../utils/imageUtils';
import {
  MINIMUM_PHOTOS_REQUIRED,
  MAXIMUM_PHOTOS_ALLOWED,
  ERROR_MESSAGES,
} from '../constants';

type PhotoUploadScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PhotoUpload'
>;

interface Props {
  navigation: PhotoUploadScreenNavigationProp;
}

export default function PhotoUploadScreen({ navigation }: Props) {
  const { capturedPhotos, addPhoto, removePhoto } = useAppStore();
  const [isProcessing, setIsProcessing] = useState(false);

  const canUpload = capturedPhotos.length >= MINIMUM_PHOTOS_REQUIRED;
  const maxPhotosReached = capturedPhotos.length >= MAXIMUM_PHOTOS_ALLOWED;

  const handleTakePhoto = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) return;

    navigation.navigate('CameraCapture', {});
  };

  const handlePickFromGallery = async () => {
    const hasPermission = await requestMediaLibraryPermission();
    if (!hasPermission) return;

    if (maxPhotosReached) {
      Alert.alert('Maximum Photos Reached', ERROR_MESSAGES.MAXIMUM_PHOTOS_EXCEEDED);
      return;
    }

    setIsProcessing(true);
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        await processAndAddPhoto(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to select image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const processAndAddPhoto = async (uri: string) => {
    try {
      const compressedUri = await compressImage(uri);
      const photoId = generatePhotoId();
      const cachedUri = await cachePhoto(compressedUri, photoId);

      const photo: PhotoData = {
        id: photoId,
        uri: cachedUri,
        type: 'other',
        timestamp: Date.now(),
      };

      addPhoto(photo);
    } catch (error) {
      console.error('Error processing photo:', error);
      Alert.alert('Error', 'Failed to process photo. Please try again.');
    }
  };

  const handleRemovePhoto = (photoId: string) => {
    Alert.alert(
      'Remove Photo',
      'Are you sure you want to remove this photo?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => removePhoto(photoId),
        },
      ]
    );
  };

  const handleUpload = () => {
    if (!canUpload) {
      Alert.alert('Minimum Photos Required', ERROR_MESSAGES.MINIMUM_PHOTOS_NOT_MET);
      return;
    }

    navigation.navigate('UploadProgress');
  };

  return (
    <Container>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Upload Hair Photos</Text>
          <Text style={styles.subtitle}>
            Capture clear photos from different angles for the best analysis
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{capturedPhotos.length}</Text>
            <Text style={styles.statLabel}>Photos Added</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{MINIMUM_PHOTOS_REQUIRED}</Text>
            <Text style={styles.statLabel}>Minimum Required</Text>
          </View>
        </View>

        {capturedPhotos.length > 0 ? (
          <View style={styles.photosGrid}>
            {capturedPhotos.map((photo) => (
              <View key={photo.id} style={styles.photoCard}>
                <Image source={{ uri: photo.uri }} style={styles.photoImage} />
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => handleRemovePhoto(photo.id)}
                >
                  <Text style={styles.removeButtonText}>×</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>📸</Text>
            <Text style={styles.emptyTitle}>No Photos Yet</Text>
            <Text style={styles.emptyDescription}>
              Take a photo or select from your gallery to get started
            </Text>
          </View>
        )}

        <View style={styles.actions}>
          <Button
            title="📷 Take Photo"
            onPress={handleTakePhoto}
            variant="primary"
            disabled={maxPhotosReached || isProcessing}
          />
          <View style={styles.spacer} />
          <Button
            title="🖼️ Choose from Gallery"
            onPress={handlePickFromGallery}
            variant="outline"
            disabled={maxPhotosReached}
            loading={isProcessing}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <Button
          title={`Upload ${capturedPhotos.length} Photo${
            capturedPhotos.length !== 1 ? 's' : ''
          }`}
          onPress={handleUpload}
          disabled={!canUpload}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: theme.spacing.xl,
  },
  header: {
    marginBottom: theme.spacing.xl,
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    ...theme.typography.h1,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  statLabel: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
  },
  statDivider: {
    width: 1,
    backgroundColor: theme.colors.border,
    marginHorizontal: theme.spacing.md,
  },
  photosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -theme.spacing.xs,
    marginBottom: theme.spacing.lg,
  },
  photoCard: {
    width: '48%',
    aspectRatio: 1,
    margin: theme.spacing.xs,
    borderRadius: theme.borderRadius.md,
    overflow: 'hidden',
    ...theme.shadows.small,
  },
  photoImage: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.surfaceLight,
  },
  removeButton: {
    position: 'absolute',
    top: theme.spacing.sm,
    right: theme.spacing.sm,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.error,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadows.medium,
  },
  removeButtonText: {
    color: theme.colors.white,
    fontSize: 24,
    fontWeight: '600',
    marginTop: -2,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xxl,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: theme.spacing.md,
  },
  emptyTitle: {
    ...theme.typography.h3,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  emptyDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  actions: {
    marginTop: theme.spacing.lg,
  },
  spacer: {
    height: theme.spacing.md,
  },
  bottomBar: {
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
});
