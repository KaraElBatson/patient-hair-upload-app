import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, PhotoData } from '../types';
import { theme } from '../theme';
import { useAppStore } from '../store';
import {
  compressImage,
  generatePhotoId,
  cachePhoto,
} from '../utils/imageUtils';
import { SUCCESS_MESSAGES } from '../constants';

type CameraCaptureScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CameraCapture'
>;

type CameraCaptureScreenRouteProp = RouteProp<
  RootStackParamList,
  'CameraCapture'
>;

interface Props {
  navigation: CameraCaptureScreenNavigationProp;
  route: CameraCaptureScreenRouteProp;
}

export default function CameraCaptureScreen({ navigation, route }: Props) {
  const [type, setType] = useState(CameraType.back);
  const [isProcessing, setIsProcessing] = useState(false);
  const cameraRef = useRef<Camera>(null);
  const addPhoto = useAppStore((state) => state.addPhoto);

  const { viewType = 'other' } = route.params || {};

  const handleCapture = async () => {
    if (!cameraRef.current || isProcessing) return;

    setIsProcessing(true);
    try {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.8,
        skipProcessing: false,
      });

      if (photo) {
        await processAndSavePhoto(photo.uri);
      }
    } catch (error) {
      console.error('Error capturing photo:', error);
      Alert.alert('Error', 'Failed to capture photo. Please try again.');
      setIsProcessing(false);
    }
  };

  const processAndSavePhoto = async (uri: string) => {
    try {
      const compressedUri = await compressImage(uri);
      const photoId = generatePhotoId();
      const cachedUri = await cachePhoto(compressedUri, photoId);

      const photoData: PhotoData = {
        id: photoId,
        uri: cachedUri,
        type: viewType,
        timestamp: Date.now(),
      };

      addPhoto(photoData);

      Alert.alert('Success', SUCCESS_MESSAGES.PHOTO_CAPTURED, [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (error) {
      console.error('Error processing photo:', error);
      Alert.alert('Error', 'Failed to process photo. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={styles.camera} type={type}>
        {/* Overlay Guide */}
        <View style={styles.overlay}>
          <View style={styles.overlayTop}>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.overlayMiddle}>
            <View style={styles.guideFrame}>
              <View style={[styles.guideCorner, styles.guideTopLeft]} />
              <View style={[styles.guideCorner, styles.guideTopRight]} />
              <View style={[styles.guideCorner, styles.guideBottomLeft]} />
              <View style={[styles.guideCorner, styles.guideBottomRight]} />
              <Text style={styles.guideText}>
                Align your head within the frame
              </Text>
            </View>
          </View>

          <View style={styles.overlayBottom}>
            <TouchableOpacity
              style={styles.flipButton}
              onPress={toggleCameraType}
              disabled={isProcessing}
            >
              <Text style={styles.flipButtonText}>🔄</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.captureButton}
              onPress={handleCapture}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <ActivityIndicator color={theme.colors.primary} size="large" />
              ) : (
                <View style={styles.captureButtonInner} />
              )}
            </TouchableOpacity>

            <View style={styles.flipButton} />
          </View>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  overlayTop: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: theme.spacing.lg,
  },
  overlayMiddle: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.xl,
  },
  overlayBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
  closeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    color: theme.colors.white,
    fontSize: 36,
    fontWeight: '300',
    marginTop: -4,
  },
  guideFrame: {
    width: 280,
    height: 320,
    borderWidth: 2,
    borderColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    position: 'relative',
    justifyContent: 'flex-end',
    paddingBottom: theme.spacing.md,
  },
  guideCorner: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderColor: theme.colors.primary,
    borderWidth: 4,
  },
  guideTopLeft: {
    top: -2,
    left: -2,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderTopLeftRadius: theme.borderRadius.lg,
  },
  guideTopRight: {
    top: -2,
    right: -2,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderTopRightRadius: theme.borderRadius.lg,
  },
  guideBottomLeft: {
    bottom: -2,
    left: -2,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomLeftRadius: theme.borderRadius.lg,
  },
  guideBottomRight: {
    bottom: -2,
    right: -2,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomRightRadius: theme.borderRadius.lg,
  },
  guideText: {
    ...theme.typography.bodySmall,
    color: theme.colors.white,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: theme.colors.primary,
  },
  captureButtonInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: theme.colors.white,
  },
  flipButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipButtonText: {
    fontSize: 28,
  },
});
