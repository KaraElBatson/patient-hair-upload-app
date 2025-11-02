import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../../types';
import { theme } from '../../theme';
import { useAppStore } from '../../store';

type AngleType = 'Front' | 'Back' | 'Left' | 'Right' | 'Top';

interface AngleConfig {
  angle: AngleType;
  icon: string;
  nextScreen?: keyof RootStackParamList;
}

const angleConfigs: Record<AngleType, AngleConfig> = {
  Front: {
    angle: 'Front',
    icon: 'account',
    nextScreen: 'FlowCaptureBack',
  },
  Back: {
    angle: 'Back',
    icon: 'account-outline',
    nextScreen: 'FlowCaptureLeft',
  },
  Left: {
    angle: 'Left',
    icon: 'arrow-left',
    nextScreen: 'FlowCaptureRight',
  },
  Right: {
    angle: 'Right',
    icon: 'arrow-right',
    nextScreen: 'FlowCaptureTop',
  },
  Top: {
    angle: 'Top',
    icon: 'arrow-up',
    nextScreen: undefined, // Last screen
  },
};

type FlowCaptureScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  | 'FlowCaptureFront'
  | 'FlowCaptureBack'
  | 'FlowCaptureLeft'
  | 'FlowCaptureRight'
  | 'FlowCaptureTop'
>;

type FlowCaptureScreenRouteProp = RouteProp<
  RootStackParamList,
  | 'FlowCaptureFront'
  | 'FlowCaptureBack'
  | 'FlowCaptureLeft'
  | 'FlowCaptureRight'
  | 'FlowCaptureTop'
>;

interface Props {
  navigation: FlowCaptureScreenNavigationProp;
  route: FlowCaptureScreenRouteProp;
  angle: AngleType;
}

export default function FlowCaptureScreen({ navigation, route, angle }: Props) {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<'front' | 'back'>('back');
  const [isProcessing, setIsProcessing] = useState(false);
  const cameraRef = useRef<CameraView>(null);
  const setOnboardingComplete = useAppStore((state) => state.setOnboardingComplete);

  const config = angleConfigs[angle];

  const handleCapture = async () => {
    if (!cameraRef.current || isProcessing) return;

    setIsProcessing(true);
    try {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.8,
      });

      if (photo) {
        // Simulate photo processing
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Navigate to next screen or complete
        if (config.nextScreen) {
          navigation.navigate(config.nextScreen as any);
        } else {
          // Last photo captured - mark onboarding as complete
          setOnboardingComplete();
          Alert.alert('Success', 'All photos captured successfully!', [
            {
              text: 'Done',
              onPress: () => {
                // Navigate to main app (you can change this to PhotoUpload or another screen)
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'PhotoUpload' as any }],
                });
              },
            },
          ]);
        }
      }
    } catch (error) {
      console.error('Error capturing photo:', error);
      Alert.alert('Error', 'Failed to capture photo. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const toggleCameraType = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  if (!permission) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>
          Camera permission is required to take photos
        </Text>
        <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
          <Text style={styles.permissionButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Instruction Header */}
      <View style={styles.instructionHeader}>
        <Text style={styles.instructionText}>
          Please take a photo of your {config.angle}.
        </Text>
      </View>

      {/* Camera Preview */}
      <View style={styles.cameraContainer}>
        <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
          {/* Guide Overlay */}
          <View style={styles.guideOverlay}>
            <View style={styles.guideCircle}>
              <MaterialCommunityIcons
                name={config.icon as any}
                size={80}
                color={theme.colors.primary}
              />
              <Text style={styles.guideLabel}>{config.angle}</Text>
            </View>
          </View>
        </CameraView>
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        {/* Flip Camera Button */}
        <TouchableOpacity
          style={styles.flipButton}
          onPress={toggleCameraType}
          disabled={isProcessing}
        >
          <MaterialCommunityIcons
            name="camera-flip"
            size={28}
            color={theme.colors.text}
          />
        </TouchableOpacity>

        {/* Capture Button */}
        <TouchableOpacity
          style={styles.captureButton}
          onPress={handleCapture}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <ActivityIndicator color={theme.colors.text} size="large" />
          ) : (
            <View style={styles.captureButtonInner} />
          )}
        </TouchableOpacity>

        {/* Spacer */}
        <View style={styles.flipButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  instructionHeader: {
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.lg,
    backgroundColor: theme.colors.backgroundLight,
  },
  instructionText: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
    textAlign: 'center',
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  guideOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  guideCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    backgroundColor: 'rgba(19, 236, 146, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  guideLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.white,
    marginTop: theme.spacing.sm,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.xl,
    backgroundColor: theme.colors.backgroundLight,
  },
  flipButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: theme.colors.white,
    ...theme.shadows.large,
  },
  captureButtonInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: theme.colors.primary,
  },
  permissionText: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.text,
    textAlign: 'center',
    paddingHorizontal: theme.spacing.xl,
    marginBottom: theme.spacing.lg,
  },
  permissionButton: {
    height: 48,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: theme.spacing.xl,
  },
  permissionButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
  },
});
