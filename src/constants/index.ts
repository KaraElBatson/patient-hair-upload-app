import { OnboardingSlide } from '../types';

export const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: 1,
    title: 'Welcome to Hair Photo Upload',
    description:
      'Upload your hair photos easily and securely for professional analysis. We guide you through every step of the process.',
  },
  {
    id: 2,
    title: 'Take Quality Photos',
    description:
      'We\'ll show you exactly how to capture the best photos. Make sure to take photos from the front, top, and side angles in good lighting.',
  },
  {
    id: 3,
    title: 'Your Privacy Matters',
    description:
      'All photos are securely encrypted and stored. Your data is anonymized and protected according to healthcare standards.',
  },
];

export const MINIMUM_PHOTOS_REQUIRED = 1;
export const MAXIMUM_PHOTOS_ALLOWED = 10;

export const API_CONFIG = {
  BASE_URL: __DEV__
    ? 'http://localhost:3000/api'
    : 'https://api.hairupload.com',
  TIMEOUT: 30000, // 30 seconds
};

export const PHOTO_VIEW_TYPES = {
  FRONT: 'front' as const,
  TOP: 'top' as const,
  SIDE: 'side' as const,
  OTHER: 'other' as const,
};

export const ERROR_MESSAGES = {
  CAMERA_PERMISSION_DENIED: 'Camera permission is required to capture photos.',
  GALLERY_PERMISSION_DENIED:
    'Gallery permission is required to select photos.',
  IMAGE_TOO_LARGE: 'Image file is too large. Please select a smaller image.',
  UPLOAD_FAILED: 'Upload failed. Please check your connection and try again.',
  NETWORK_ERROR: 'Network error. Please check your internet connection.',
  MINIMUM_PHOTOS_NOT_MET: `Please capture at least ${MINIMUM_PHOTOS_REQUIRED} photo(s).`,
  MAXIMUM_PHOTOS_EXCEEDED: `You can only upload up to ${MAXIMUM_PHOTOS_ALLOWED} photos.`,
};

export const SUCCESS_MESSAGES = {
  PHOTO_CAPTURED: 'Photo captured successfully!',
  UPLOAD_COMPLETE: 'All photos uploaded successfully!',
  FEEDBACK_SUBMITTED: 'Thank you for your feedback!',
};
