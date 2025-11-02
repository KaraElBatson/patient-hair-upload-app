import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { RootStackParamList } from '../types';
import { useAppStore } from '../store';
import { theme } from '../theme';

// Import screens (will be created)
import WelcomeScreen from '../screens/WelcomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import PhotoUploadScreen from '../screens/PhotoUploadScreen';
import CameraCaptureScreen from '../screens/CameraCaptureScreen';
import PhotoPreviewScreen from '../screens/PhotoPreviewScreen';
import UploadProgressScreen from '../screens/UploadProgressScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import FeedbackScreen from '../screens/FeedbackScreen';

// Import new flow screens
import FlowWelcomeScreen from '../screens/flow/FlowWelcomeScreen';
import FlowTipLightingScreen from '../screens/flow/FlowTipLightingScreen';
import FlowTipFocusScreen from '../screens/flow/FlowTipFocusScreen';
import FlowCaptureFrontScreen from '../screens/flow/FlowCaptureFrontScreen';
import FlowCaptureBackScreen from '../screens/flow/FlowCaptureBackScreen';
import FlowCaptureLeftScreen from '../screens/flow/FlowCaptureLeftScreen';
import FlowCaptureRightScreen from '../screens/flow/FlowCaptureRightScreen';
import FlowCaptureTopScreen from '../screens/flow/FlowCaptureTopScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const hasCompletedOnboarding = useAppStore((state) => state.hasCompletedOnboarding);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Give the store a moment to hydrate from AsyncStorage
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={hasCompletedOnboarding ? 'PhotoUpload' : 'FlowWelcome'}
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        {/* New 8-screen flow */}
        <Stack.Screen name="FlowWelcome" component={FlowWelcomeScreen} />
        <Stack.Screen name="FlowTipLighting" component={FlowTipLightingScreen} />
        <Stack.Screen name="FlowTipFocus" component={FlowTipFocusScreen} />
        <Stack.Screen name="FlowCaptureFront" component={FlowCaptureFrontScreen} />
        <Stack.Screen name="FlowCaptureBack" component={FlowCaptureBackScreen} />
        <Stack.Screen name="FlowCaptureLeft" component={FlowCaptureLeftScreen} />
        <Stack.Screen name="FlowCaptureRight" component={FlowCaptureRightScreen} />
        <Stack.Screen name="FlowCaptureTop" component={FlowCaptureTopScreen} />

        {/* Original screens */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />

        <Stack.Screen name="PhotoUpload" component={PhotoUploadScreen} />

        <Stack.Screen
          name="CameraCapture"
          component={CameraCaptureScreen}
          options={{
            presentation: 'modal',
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        />

        <Stack.Screen
          name="PhotoPreview"
          component={PhotoPreviewScreen}
          options={{
            presentation: 'modal',
          }}
        />

        <Stack.Screen
          name="UploadProgress"
          component={UploadProgressScreen}
          options={{
            presentation: 'modal',
            gestureEnabled: false,
          }}
        />

        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />

        <Stack.Screen
          name="Feedback"
          component={FeedbackScreen}
          options={{
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundLight,
  },
});
