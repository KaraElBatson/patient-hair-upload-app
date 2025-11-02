# Hair Photo Capture Flow Documentation

## Overview
This app implements an 8-screen guided flow for capturing hair photos from 5 different angles. The flow is shown only on the first app launch, and after completion, users are taken directly to the main app.

## Flow Sequence

### Information Screens (3 screens)
1. **FlowWelcome** - Welcome & introduction
   - Header: "Let's Capture Your Hair Journey"
   - Subtext explaining the process
   - Time estimate: "Takes about 2-3 minutes"
   - Button: "Get Started"

2. **FlowTipLighting** - Lighting tip
   - Section title: "Quick Tips for Great Photos"
   - Icon: Sun (Good Lighting)
   - Tip about natural light and neutral backgrounds
   - Button: "Next"

3. **FlowTipFocus** - Focus tip
   - Section title: "Quick Tips for Great Photos"
   - Icon: Target (Clear & Focused)
   - Tip about keeping steady and in focus
   - Button: "Next"

### Photo Capture Screens (5 screens)
4. **FlowCaptureFront** - Front view
   - Instruction: "Please take a photo of your Front."
   - Camera preview with guide overlay
   - Silhouette guide with Front icon
   - Auto-advances to next screen after capture

5. **FlowCaptureBack** - Back view
   - Instruction: "Please take a photo of your Back."
   - Camera preview with guide overlay
   - Auto-advances to next screen after capture

6. **FlowCaptureLeft** - Left view
   - Instruction: "Please take a photo of your Left."
   - Camera preview with guide overlay
   - Auto-advances to next screen after capture

7. **FlowCaptureRight** - Right view
   - Instruction: "Please take a photo of your Right."
   - Camera preview with guide overlay
   - Auto-advances to next screen after capture

8. **FlowCaptureTop** - Top view
   - Instruction: "Please take a photo of your Top."
   - Camera preview with guide overlay
   - After capture: Marks onboarding complete and navigates to PhotoUpload

## Onboarding State Management

### How it Works
- Uses Zustand store with AsyncStorage persistence
- `hasCompletedOnboarding` boolean tracks completion status
- Persisted to device storage so status survives app restarts

### First Launch
- `hasCompletedOnboarding = false`
- App starts at `FlowWelcome` screen
- User goes through all 8 screens
- After last photo (Top), `setOnboardingComplete()` is called
- User is navigated to `PhotoUpload` screen

### Subsequent Launches
- `hasCompletedOnboarding = true` (loaded from AsyncStorage)
- App starts directly at `PhotoUpload` screen
- Onboarding flow is skipped

### Resetting Onboarding
To test the flow again or reset onboarding status:
```javascript
// In your app, call:
useAppStore.getState().resetApp();
// Or just reset onboarding:
useAppStore.setState({ hasCompletedOnboarding: false });
```

## Technical Implementation

### Key Files
- `src/screens/flow/FlowWelcomeScreen.tsx` - Welcome screen
- `src/screens/flow/FlowTipLightingScreen.tsx` - Lighting tip
- `src/screens/flow/FlowTipFocusScreen.tsx` - Focus tip
- `src/screens/flow/FlowCaptureScreen.tsx` - Reusable capture component
- `src/screens/flow/FlowCapture[Angle]Screen.tsx` - Angle-specific wrappers
- `src/navigation/RootNavigator.tsx` - Navigation with onboarding logic
- `src/store/index.ts` - Zustand store with onboarding state

### Navigation Logic
```typescript
// In RootNavigator.tsx
const hasCompletedOnboarding = useAppStore((state) => state.hasCompletedOnboarding);

<Stack.Navigator
  initialRouteName={hasCompletedOnboarding ? 'PhotoUpload' : 'FlowWelcome'}
>
```

### Camera Permissions
- Automatically requests camera permissions when user reaches first capture screen
- Shows permission button if permission denied
- Uses modern `CameraView` component from expo-camera

## User Experience Flow

```
First Launch:
FlowWelcome → FlowTipLighting → FlowTipFocus →
FlowCaptureFront → FlowCaptureBack → FlowCaptureLeft →
FlowCaptureRight → FlowCaptureTop → PhotoUpload

Subsequent Launches:
PhotoUpload (directly)
```

## Benefits of This Approach

1. **First-Time Education**: Users are properly guided on first launch
2. **Seamless Experience**: Returning users skip directly to main app
3. **Persistent State**: Onboarding status survives app restarts
4. **Clear Flow**: Linear progression through information then action
5. **Completion Tracking**: System knows when all photos are taken
