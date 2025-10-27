import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import Container from '../components/Container';
import ProgressBar from '../components/ProgressBar';
import { theme } from '../theme';
import { useAppStore } from '../store';
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '../constants';

type UploadProgressScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UploadProgress'
>;

interface Props {
  navigation: UploadProgressScreenNavigationProp;
}

export default function UploadProgressScreen({ navigation }: Props) {
  const capturedPhotos = useAppStore((state) => state.capturedPhotos);
  const clearPhotos = useAppStore((state) => state.clearPhotos);
  const [progress, setProgress] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    simulateUpload();
  }, []);

  const simulateUpload = async () => {
    try {
      // Simulate upload progress for each photo
      for (let i = 0; i < capturedPhotos.length; i++) {
        setCurrentPhotoIndex(i);

        // Simulate upload progress from 0 to 100 for each photo
        for (let p = 0; p <= 100; p += 10) {
          await new Promise((resolve) => setTimeout(resolve, 100));
          const totalProgress =
            ((i + p / 100) / capturedPhotos.length) * 100;
          setProgress(totalProgress);
        }
      }

      // Upload complete
      setProgress(100);
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Generate confirmation ID
      const confirmationId = `CONF-${Date.now()}`;

      // Clear photos and navigate to confirmation
      clearPhotos();
      navigation.replace('Confirmation', { confirmationId });
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Upload Failed', ERROR_MESSAGES.UPLOAD_FAILED, [
        {
          text: 'Try Again',
          onPress: () => navigation.goBack(),
        },
      ]);
    }
  };

  return (
    <Container>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>☁️</Text>
          </View>
          <Text style={styles.title}>Uploading Photos</Text>
          <Text style={styles.subtitle}>
            Please wait while we securely upload your photos
          </Text>
        </View>

        <View style={styles.progressContainer}>
          <ProgressBar progress={progress} />
          <Text style={styles.progressText}>
            Uploading photo {currentPhotoIndex + 1} of {capturedPhotos.length}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            💡 Tip: Keep the app open until the upload is complete
          </Text>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing.xxl,
  },
  iconContainer: {
    width: 100,
    height: 100,
    backgroundColor: theme.colors.primaryLight,
    borderRadius: theme.borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.lg,
  },
  icon: {
    fontSize: 48,
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  progressContainer: {
    marginBottom: theme.spacing.xl,
  },
  progressText: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginTop: theme.spacing.md,
  },
  infoBox: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary,
  },
  infoText: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
  },
});
