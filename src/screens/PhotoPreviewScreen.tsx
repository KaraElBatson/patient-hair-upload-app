import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { theme } from '../theme';
import { useAppStore } from '../store';
import Button from '../components/Button';

type PhotoPreviewScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PhotoPreview'
>;

type PhotoPreviewScreenRouteProp = RouteProp<
  RootStackParamList,
  'PhotoPreview'
>;

interface Props {
  navigation: PhotoPreviewScreenNavigationProp;
  route: PhotoPreviewScreenRouteProp;
}

export default function PhotoPreviewScreen({ navigation, route }: Props) {
  const { photoId } = route.params;
  const photo = useAppStore((state) => state.getPhotoById(photoId));

  if (!photo) {
    navigation.goBack();
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.closeButtonText}>×</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: photo.uri }} style={styles.image} />
      </View>

      <View style={styles.footer}>
        <Button title="Done" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: theme.spacing.lg,
  },
  closeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    color: theme.colors.white,
    fontSize: 36,
    fontWeight: '300',
    marginTop: -4,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  footer: {
    padding: theme.spacing.lg,
  },
});
