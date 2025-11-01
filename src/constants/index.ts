import { OnboardingSlide } from '../types';

export const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: 1,
    title: 'Good Lighting',
    description:
      'Use natural, even light and avoid shadows. A plain, neutral background works best for clear photos.',
    icon: 'white-balance-sunny',
  },
  {
    id: 2,
    title: 'Clear & Focused',
    description:
      'Hold your phone at arm\'s length, keep it steady, and ensure your hair is in sharp focus.',
    icon: 'target',
  },
  {
    id: 3,
    title: '5 Required Angles',
    description:
      'We need photos from all five angles: Front, Back, Left Side, Right Side, and Top View.',
    icon: 'image-multiple',
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
