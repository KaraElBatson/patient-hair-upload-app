// Photo types
export type PhotoViewType = 'front' | 'top' | 'side' | 'other';

export interface PhotoData {
  id: string;
  uri: string;
  type: PhotoViewType;
  timestamp: number;
  width?: number;
  height?: number;
  fileSize?: number;
}

export interface PhotoMetadata {
  uploadId: string;
  timestamp: number;
  viewType: PhotoViewType;
}

// Upload types
export interface UploadRequest {
  patientId?: string;
  photoCount: number;
}

export interface UploadSession {
  uploadId: string;
  signedUrls: string[];
  expiresAt: string;
}

export interface PhotoUploadResult {
  photoId: string;
  url: string;
  thumbnailUrl?: string;
}

export interface UploadConfirmation {
  confirmationId: string;
  status: 'completed' | 'partial' | 'failed';
  photos: PhotoUploadResult[];
}

export interface UploadQueueItem {
  photo: PhotoData;
  retryCount: number;
  lastAttempt?: number;
}

// Feedback types
export interface FeedbackData {
  rating: number; // 1-5
  comments?: string;
  uploadId?: string;
  timestamp: number;
}

// Quality check types
export interface QualityReport {
  isBlurry: boolean;
  hasGoodLighting: boolean;
  correctAngle: boolean;
  suggestions: string[];
}

// Navigation types
export type RootStackParamList = {
  Welcome: undefined;
  Onboarding: undefined;
  PhotoUpload: undefined;
  CameraCapture: { viewType?: PhotoViewType };
  PhotoPreview: { photoId: string };
  UploadProgress: undefined;
  Confirmation: { confirmationId: string };
  Feedback: { uploadId: string };
};

// Onboarding types
export interface OnboardingSlide {
  id: number;
  title: string;
  description: string;
  icon?: string; // MaterialCommunityIcons icon name
  image?: any; // require() type
}
