import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  PhotoData,
  UploadQueueItem,
  FeedbackData,
  PhotoViewType,
} from '../types';

interface AppState {
  // Onboarding State
  hasCompletedOnboarding: boolean;
  currentOnboardingStep: number;

  // Photo Upload State
  capturedPhotos: PhotoData[];
  uploadQueue: UploadQueueItem[];
  uploadProgress: Record<string, number>; // photoId -> progress %
  currentUploadId: string | null;

  // UI State
  isUploading: boolean;
  uploadError: string | null;

  // Feedback
  userFeedback: FeedbackData | null;

  // Actions - Onboarding
  setOnboardingComplete: () => void;
  setOnboardingStep: (step: number) => void;
  skipOnboarding: () => void;

  // Actions - Photos
  addPhoto: (photo: PhotoData) => void;
  removePhoto: (photoId: string) => void;
  clearPhotos: () => void;
  getPhotoById: (photoId: string) => PhotoData | undefined;

  // Actions - Upload
  setUploadId: (uploadId: string) => void;
  updateUploadProgress: (photoId: string, progress: number) => void;
  setUploading: (isUploading: boolean) => void;
  setUploadError: (error: string | null) => void;
  addToUploadQueue: (photo: PhotoData) => void;
  removeFromUploadQueue: (photoId: string) => void;
  clearUploadQueue: () => void;
  resetUploadState: () => void;

  // Actions - Feedback
  submitFeedback: (feedback: FeedbackData) => void;
  clearFeedback: () => void;

  // Actions - Reset
  resetApp: () => void;
}

const initialState = {
  hasCompletedOnboarding: false,
  currentOnboardingStep: 0,
  capturedPhotos: [],
  uploadQueue: [],
  uploadProgress: {},
  currentUploadId: null,
  isUploading: false,
  uploadError: null,
  userFeedback: null,
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      ...initialState,

      // Onboarding Actions
      setOnboardingComplete: () =>
        set({ hasCompletedOnboarding: true, currentOnboardingStep: 0 }),

      setOnboardingStep: (step: number) =>
        set({ currentOnboardingStep: step }),

      skipOnboarding: () =>
        set({ hasCompletedOnboarding: true, currentOnboardingStep: 0 }),

      // Photo Actions
      addPhoto: (photo: PhotoData) =>
        set((state) => ({
          capturedPhotos: [...state.capturedPhotos, photo],
        })),

      removePhoto: (photoId: string) =>
        set((state) => ({
          capturedPhotos: state.capturedPhotos.filter((p) => p.id !== photoId),
        })),

      clearPhotos: () => set({ capturedPhotos: [] }),

      getPhotoById: (photoId: string) => {
        return get().capturedPhotos.find((p) => p.id === photoId);
      },

      // Upload Actions
      setUploadId: (uploadId: string) => set({ currentUploadId: uploadId }),

      updateUploadProgress: (photoId: string, progress: number) =>
        set((state) => ({
          uploadProgress: {
            ...state.uploadProgress,
            [photoId]: progress,
          },
        })),

      setUploading: (isUploading: boolean) => set({ isUploading }),

      setUploadError: (error: string | null) => set({ uploadError: error }),

      addToUploadQueue: (photo: PhotoData) =>
        set((state) => ({
          uploadQueue: [
            ...state.uploadQueue,
            { photo, retryCount: 0, lastAttempt: Date.now() },
          ],
        })),

      removeFromUploadQueue: (photoId: string) =>
        set((state) => ({
          uploadQueue: state.uploadQueue.filter(
            (item) => item.photo.id !== photoId
          ),
        })),

      clearUploadQueue: () => set({ uploadQueue: [] }),

      resetUploadState: () =>
        set({
          uploadProgress: {},
          currentUploadId: null,
          isUploading: false,
          uploadError: null,
          uploadQueue: [],
        }),

      // Feedback Actions
      submitFeedback: (feedback: FeedbackData) =>
        set({ userFeedback: feedback }),

      clearFeedback: () => set({ userFeedback: null }),

      // Reset Actions
      resetApp: () => set(initialState),
    }),
    {
      name: 'patient-hair-upload-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        // Don't persist hasCompletedOnboarding so users always see onboarding on app launch
        uploadQueue: state.uploadQueue,
      }),
    }
  )
);
