import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';

const MAX_IMAGE_WIDTH = 1920;
const COMPRESSION_QUALITY = 0.7;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export async function compressImage(uri: string): Promise<string> {
  try {
    const manipResult = await ImageManipulator.manipulateAsync(
      uri,
      [{ resize: { width: MAX_IMAGE_WIDTH } }],
      {
        compress: COMPRESSION_QUALITY,
        format: ImageManipulator.SaveFormat.JPEG,
      }
    );
    return manipResult.uri;
  } catch (error) {
    console.error('Error compressing image:', error);
    throw new Error('Failed to compress image');
  }
}

export async function getImageInfo(uri: string) {
  try {
    const fileInfo = await FileSystem.getInfoAsync(uri);
    return {
      size: fileInfo.exists ? (fileInfo as any).size : 0,
      uri: fileInfo.uri,
    };
  } catch (error) {
    console.error('Error getting image info:', error);
    return null;
  }
}

export async function validateImageSize(uri: string): Promise<boolean> {
  const info = await getImageInfo(uri);
  return info ? info.size <= MAX_FILE_SIZE : false;
}

export function generatePhotoId(): string {
  return `photo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Cache directory management
const CACHE_DIR = `${FileSystem.cacheDirectory}hair-photos/`;

export async function ensureCacheDirExists(): Promise<void> {
  const dirInfo = await FileSystem.getInfoAsync(CACHE_DIR);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(CACHE_DIR, { intermediates: true });
  }
}

export async function cachePhoto(uri: string, photoId: string): Promise<string> {
  try {
    await ensureCacheDirExists();
    const cachedPath = `${CACHE_DIR}${photoId}.jpg`;
    await FileSystem.copyAsync({ from: uri, to: cachedPath });
    return cachedPath;
  } catch (error) {
    console.error('Error caching photo:', error);
    throw new Error('Failed to cache photo');
  }
}

export async function clearPhotoCache(): Promise<void> {
  try {
    await FileSystem.deleteAsync(CACHE_DIR, { idempotent: true });
  } catch (error) {
    console.error('Error clearing photo cache:', error);
  }
}

export async function deleteCachedPhoto(photoId: string): Promise<void> {
  try {
    const cachedPath = `${CACHE_DIR}${photoId}.jpg`;
    await FileSystem.deleteAsync(cachedPath, { idempotent: true });
  } catch (error) {
    console.error('Error deleting cached photo:', error);
  }
}
