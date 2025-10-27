# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Native mobile application prototype for patient hair photo uploads, built with Expo and TypeScript. The app aims to create an intuitive experience for patients to capture and upload hair photos during onboarding.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (shows QR code for Expo Go)
npm start

# Platform-specific development
npm run android    # Run on Android emulator/device
npm run ios        # Run on iOS simulator (macOS only)
npm run web        # Run in web browser
```

## Architecture

- **Framework**: React Native with Expo (~54.0.20)
- **TypeScript**: Strict mode enabled
- **Entry Point**: `index.ts` → `App.tsx`
- **Expo Configuration**: `app.json` (new architecture enabled, portrait orientation)
- **Testing Method**: Use Expo Go app on physical device by scanning QR code

The project is currently in prototype/scaffolding stage with a basic App.tsx component.

## Key Configuration

- **New Architecture**: Enabled in Expo config
- **TypeScript**: Extends `expo/tsconfig.base` with strict mode
- **Platforms**: iOS (supports tablet), Android (edge-to-edge enabled), Web
