# Patient Hair Upload App

A React Native mobile application designed to make hair photo uploads seamless and effortless for patients, featuring an intelligent 8-screen guided onboarding flow.

## 🎯 Project Overview

This app provides a streamlined experience for patients to capture hair photos from 5 different angles (Front, Back, Left, Right, Top) with:
- Educational tips before photo capture
- Step-by-step camera guidance
- Smart onboarding that only shows once
- Persistent state across app restarts

## ✨ Key Features

### 8-Screen Guided Flow ✅
1. **Welcome Screen** - Introduction to the photo journey
2. **Lighting Tip** - Guidance on proper lighting
3. **Focus Tip** - Instructions for sharp photos
4. **5 Photo Captures** - Guided capture of all required angles

### Smart Onboarding ✅
- Shows full flow on first launch
- Skips directly to main app on subsequent launches
- Persistent state using AsyncStorage
- Loading screen during state hydration

### Camera Features ✅
- Full camera preview with permission handling
- Front/back camera switching
- Visual guide overlays for each angle
- Auto-progression between screens
- Grant permission UI when needed

### State Management ✅
- Zustand store with persistence
- Onboarding completion tracking
- Photo data management
- Upload queue handling

## 🛠️ Tech Stack

- **React Native** 0.81.5 - Cross-platform mobile development
- **Expo** ~54.0.20 - Development and build tooling
- **TypeScript** ~5.9.2 - Type-safe development
- **React Navigation** - Stack-based navigation
- **Zustand** - Lightweight state management
- **expo-camera** - Camera functionality
- **AsyncStorage** - Persistent local storage
- **Material Community Icons** - Consistent icon system

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo Go app on your mobile device:
  - [iOS App Store](https://apps.apple.com/app/apple-store/id982107779)
  - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Installation

```bash
# Clone the repository
git clone https://github.com/KaraElBatson/patient-hair-upload-app.git
cd patient-hair-upload-app

# Install dependencies
npm install

# Start the development server
npm start
```

### Running the App

1. Start the development server: `npm start`
2. Scan the QR code with:
   - **iOS**: Camera app
   - **Android**: Expo Go app
3. The app will load on your device

### Platform-Specific Commands

```bash
npm run android    # Run on Android emulator/device
npm run ios        # Run on iOS simulator (macOS only)
npm run web        # Run in web browser
```

## 📱 User Flow

### First Launch
```
FlowWelcome → FlowTipLighting → FlowTipFocus →
FlowCaptureFront → FlowCaptureBack → FlowCaptureLeft →
FlowCaptureRight → FlowCaptureTop → PhotoUpload
(Onboarding marked complete ✓)
```

### Subsequent Launches
```
PhotoUpload (Onboarding skipped)
```

## 🏗️ Project Structure

```
patient-hair-upload-app/
├── App.tsx                           # Root component
├── index.ts                          # Entry point
├── app.json                          # Expo configuration
├── tsconfig.json                     # TypeScript config
├── package.json                      # Dependencies
│
├── src/
│   ├── screens/
│   │   ├── flow/                    # 8-screen guided flow
│   │   │   ├── FlowWelcomeScreen.tsx
│   │   │   ├── FlowTipLightingScreen.tsx
│   │   │   ├── FlowTipFocusScreen.tsx
│   │   │   ├── FlowCaptureScreen.tsx        # Reusable
│   │   │   ├── FlowCaptureFrontScreen.tsx
│   │   │   ├── FlowCaptureBackScreen.tsx
│   │   │   ├── FlowCaptureLeftScreen.tsx
│   │   │   ├── FlowCaptureRightScreen.tsx
│   │   │   └── FlowCaptureTopScreen.tsx
│   │   │
│   │   ├── WelcomeScreen.tsx        # Legacy welcome
│   │   ├── TutorialScreen.tsx       # Legacy tutorial
│   │   ├── OnboardingScreen.tsx
│   │   ├── PhotoUploadScreen.tsx
│   │   ├── CameraCaptureScreen.tsx
│   │   ├── PhotoPreviewScreen.tsx
│   │   ├── UploadProgressScreen.tsx
│   │   ├── ConfirmationScreen.tsx
│   │   └── FeedbackScreen.tsx
│   │
│   ├── navigation/
│   │   └── RootNavigator.tsx        # Navigation with onboarding logic
│   │
│   ├── store/
│   │   └── index.ts                 # Zustand store
│   │
│   ├── theme/
│   │   └── index.ts                 # Design system
│   │
│   ├── types/
│   │   └── index.ts                 # TypeScript types
│   │
│   ├── components/
│   │   ├── ProgressBar.tsx
│   │   ├── Button.tsx
│   │   └── Container.tsx
│   │
│   └── utils/
│       └── imageUtils.ts            # Image processing utilities
│
├── assets/                          # Images, icons
│
└── docs/
    ├── FLOW_DOCUMENTATION.md        # Complete flow docs
    ├── UI_INTEGRATION_SUMMARY.md    # Implementation summary
    └── CLAUDE.md                    # AI assistant instructions
```

## 🎨 Design System

### Colors
- **Primary**: `#13ec92` (Bright green)
- **Background**: `#f6f8f7` (Light)
- **Text**: `#0d1b16` (Dark)
- **Secondary Text**: `#4c9a79` (Medium green)
- **Border**: `#cfe7dd`, `#e7f3ee`
- **Gray Scale**: gray200-gray900

### Spacing
- **8px Grid System**: xs:4, sm:8, md:16, lg:24, xl:32, xxl:48

### Typography
- **Headers**: 20-32px, weights 600-700
- **Body**: 14-18px, weight 400
- **Buttons**: 16px, weight 600-700

## 🧪 Testing

### Resetting Onboarding
To test the onboarding flow again:

```javascript
// In the app or React Native Debugger
import { useAppStore } from './src/store';

// Reset entire app state
useAppStore.getState().resetApp();

// Or just reset onboarding
useAppStore.setState({ hasCompletedOnboarding: false });
```

### TypeScript Check
```bash
npx tsc --noEmit
```

## 📚 Documentation

- **[FLOW_DOCUMENTATION.md](./FLOW_DOCUMENTATION.md)** - Detailed flow documentation
- **[UI_INTEGRATION_SUMMARY.md](./UI_INTEGRATION_SUMMARY.md)** - UI implementation summary
- **[CLAUDE.md](./CLAUDE.md)** - Project guidance for Claude Code

## 🔧 Configuration

### Expo Config (`app.json`)
- New architecture enabled
- Portrait orientation only
- Camera permissions configured
- iOS and Android settings

### Permissions
- **Camera**: Required for photo capture
- **Photo Library**: For saving/accessing photos

## 🚧 Development Status

### ✅ Completed
- [x] 8-screen guided flow
- [x] Onboarding state management
- [x] Camera integration
- [x] Navigation system
- [x] Theme and design system
- [x] TypeScript types
- [x] State persistence

### 🔄 In Progress
- [ ] Photo quality validation
- [ ] Real-time capture feedback
- [ ] Photo review/retake flow

### 📋 Planned
- [ ] Backend integration
- [ ] AI analysis integration
- [ ] User authentication
- [ ] Photo storage management

## 🤝 Contributing

This project is actively developed. Contributions are welcome!

### Guidelines
1. Follow TypeScript best practices
2. Use the existing theme system
3. Maintain component structure
4. Update documentation for new features
5. Test on both iOS and Android

## 📄 License

MIT License - See LICENSE file for details

## 🙏 Acknowledgments

Built with:
- React Native and Expo team
- Zustand state management
- Material Design Icons
- Claude Code AI assistance

---

**Version**: 1.0.0
**Last Updated**: 2025-11-02
**Status**: Production Ready
**Repository**: [github.com/KaraElBatson/patient-hair-upload-app](https://github.com/KaraElBatson/patient-hair-upload-app)
