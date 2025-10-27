import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { useAppStore } from '../store';

// Import screens (will be created)
import WelcomeScreen from '../screens/WelcomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import PhotoUploadScreen from '../screens/PhotoUploadScreen';
import CameraCaptureScreen from '../screens/CameraCaptureScreen';
import PhotoPreviewScreen from '../screens/PhotoPreviewScreen';
import UploadProgressScreen from '../screens/UploadProgressScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import FeedbackScreen from '../screens/FeedbackScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const hasCompletedOnboarding = useAppStore(
    (state) => state.hasCompletedOnboarding
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={hasCompletedOnboarding ? 'PhotoUpload' : 'Welcome'}
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        {!hasCompletedOnboarding && (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          </>
        )}

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
