# 📱 Hair Photo Upload Experience – Patient Journey Prototype (PRD)

## 1. Overview
This project aims to design and develop a **mobile prototype** that provides patients with the **most seamless and effortless experience** when uploading their **hair photos** for medical or consultation purposes.  
The focus is on **user-centered onboarding**, intuitive photo guidance, and a smooth step-by-step journey that minimizes confusion and friction.

- **Tech Stack:** React Native + TypeScript + Expo Go  
- **Platform:** iOS & Android  
- **Goal:** To simplify and enhance the patient photo submission process through a guided mobile interface.

---

## 2. Objectives
- Eliminate user confusion and friction in the photo upload process.
- Build an **intuitive onboarding flow** that explains purpose, steps, and privacy clearly.
- Ensure photos are uploaded with proper **lighting, angle, and framing guidance**.
- Provide a **secure and fast** upload process that integrates with the backend API or cloud storage.
- Prototype should simulate a **complete user journey** from onboarding → photo upload → confirmation.

---

## 3. Key Features

### 3.1 Onboarding Flow
- Welcome screen explaining the purpose (“Upload your hair photos for analysis”)
- Step-by-step illustrations on how to take photos (e.g., front, top, side views)
- Information about privacy, storage, and consent
- Optional “Skip tutorial” button

### 3.2 Photo Capture & Upload
- Option to **take a new photo** or **upload from gallery**
- Real-time guidance overlay (head silhouette for alignment)
- Progress indicator for upload
- Local preview and retake option before submission
- Basic validation: minimum number of required photos, image quality checks

### 3.3 Confirmation & Feedback
- Success screen after upload with thank-you message
- Optional feedback form (“Was this process easy?”)
- Backend simulation for upload completion message

---

## 4. Target Users
- Patients seeking online consultation or hair analysis
- Non-technical users who may be unfamiliar with complex upload flows
- Clinics and doctors who receive patient photos for analysis

---

## 5. User Journey (Step-by-Step)

| Step | Screen | Description |
|------|---------|-------------|
| 1 | Welcome | Introduce the app’s purpose and reassure data security |
| 2 | Onboarding | Show 3–4 slides with illustrations (how to take proper photos) |
| 3 | Photo Upload | Choose “Camera” or “Gallery” |
| 4 | Capture | Show alignment overlay, confirm or retake |
| 5 | Upload Progress | Indicate progress and handle slow connection gracefully |
| 6 | Confirmation | Show “Upload Successful” message |
| 7 | Feedback | Optional form to rate experience |

---

## 6. Technical Requirements

### 6.1 Frontend
- **Framework:** React Native (Expo Go)
- **Language:** TypeScript
- **Navigation:** React Navigation
- **Storage:** Expo FileSystem / Cloud upload simulation
- **UI Components:** Custom components for buttons, modals, image previews
- **State Management:** Context API or Zustand

### 6.2 Integrations
- Cloud storage API (mock or real integration)
- Optional analytics tracking (e.g., upload completion, onboarding skip rate)
- Localization support (EN/TR)

### 6.3 Performance
- Optimized image compression before upload
- Smooth transitions between steps
- Fast startup time (< 3 seconds)

---

## 7. Success Metrics
- Onboarding completion rate ≥ 90%
- Successful photo upload rate ≥ 95%
- Average photo upload time ≤ 10 seconds
- User satisfaction score ≥ 4.5/5 (from in-app feedback)

---

## 8. Future Enhancements
- AI-based image validation (blur, lighting, angle)
- Integration with patient record management system
- Offline photo queue and auto-sync
- Doctor-side dashboard for reviewing uploads

---

## 9. Deliverables
- **Clickable prototype** built with React Native Expo Go
- **Screen flow documentation**
- **Code repository** (GitHub / GitLab)
- **Demo video (optional)** showing patient journey

---

## 10. Timeline (Prototype Phase)

| Week | Deliverable |
|------|--------------|
| 1 | Requirements & wireframes |
| 2 | Onboarding screens implementation |
| 3 | Photo upload flow implementation |
| 4 | Confirmation and feedback screens |
| 5 | Testing & refinement |
| 6 | Final demo and documentation |

---

## 11. Risks & Mitigation
| Risk | Description | Mitigation |
|------|--------------|-------------|
| Low user tech literacy | Users may not follow upload instructions properly | Add visual aids and simplified onboarding |
| Upload failure | Weak connection may interrupt upload | Include retry & offline queue |
| Privacy concerns | Users hesitant to share personal photos | Highlight data safety & anonymization |

---

## 12. References
- React Native Expo Docs  
- UI/UX standards for medical mobile apps  
- Sample apps: SkinVision, Miiskin, HairClinic Upload App

---

## 13. Author
**Product Manager:** Emrecan Akgül  
**Date:** October 2025  
**Version:** 1.0.0  
**Status:** Draft  
