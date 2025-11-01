import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList, OnboardingSlide } from '../types';
import { theme } from '../theme';
import { ONBOARDING_SLIDES } from '../constants';
import Button from '../components/Button';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;

interface Props {
  navigation: OnboardingScreenNavigationProp;
}

export default function OnboardingScreen({ navigation }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const isLastSlide = currentIndex === ONBOARDING_SLIDES.length - 1;

  const handleNext = () => {
    if (isLastSlide) {
      handleFinish();
    } else {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      flatListRef.current?.scrollToIndex({ index: prevIndex, animated: true });
      setCurrentIndex(prevIndex);
    }
  };

  const handleSkip = () => {
    handleFinish();
  };

  const handleFinish = () => {
    navigation.replace('PhotoUpload');
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {currentIndex > 0 && (
            <TouchableOpacity onPress={handlePrevious} style={styles.backButton}>
              <MaterialCommunityIcons name="arrow-left" size={24} color={theme.colors.text} />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.stepIndicator}>
          Step {currentIndex + 1} of {ONBOARDING_SLIDES.length}
        </Text>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        data={ONBOARDING_SLIDES}
        renderItem={({ item }) => <SlideItem slide={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        scrollEventThrottle={32}
      />

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {ONBOARDING_SLIDES.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === currentIndex && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>

        <View style={styles.navigationButtons}>
          {currentIndex > 0 && (
            <TouchableOpacity
              style={styles.previousButton}
              onPress={handlePrevious}
            >
              <Text style={styles.previousButtonText}>Previous</Text>
            </TouchableOpacity>
          )}

          <Button
            title={isLastSlide ? "I'm Ready to Start" : 'Next'}
            onPress={handleNext}
            style={styles.nextButton}
          />
        </View>
      </View>
    </View>
  );
}

interface SlideItemProps {
  slide: OnboardingSlide;
}

function SlideItem({ slide }: SlideItemProps) {
  // Render additional content for the 5 angles slide
  const renderAnglesGrid = () => {
    if (slide.id !== 3) return null;

    return (
      <View style={styles.anglesGrid}>
        <View style={styles.angleItem}>
          <View style={styles.angleIcon}>
            <MaterialCommunityIcons name="account" size={24} color={theme.colors.textSecondary} />
          </View>
          <Text style={styles.angleLabel}>Front</Text>
        </View>
        <View style={styles.angleItem}>
          <View style={styles.angleIcon}>
            <MaterialCommunityIcons name="account-outline" size={24} color={theme.colors.textSecondary} />
          </View>
          <Text style={styles.angleLabel}>Back</Text>
        </View>
        <View style={styles.angleItem}>
          <View style={styles.angleIcon}>
            <MaterialCommunityIcons name="arrow-left" size={24} color={theme.colors.textSecondary} />
          </View>
          <Text style={styles.angleLabel}>Left</Text>
        </View>
        <View style={styles.angleItem}>
          <View style={styles.angleIcon}>
            <MaterialCommunityIcons name="arrow-right" size={24} color={theme.colors.textSecondary} />
          </View>
          <Text style={styles.angleLabel}>Right</Text>
        </View>
        <View style={styles.angleItem}>
          <View style={styles.angleIcon}>
            <MaterialCommunityIcons name="arrow-up" size={24} color={theme.colors.textSecondary} />
          </View>
          <Text style={styles.angleLabel}>Top</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.slide}>
      <View style={styles.slideContent}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name={slide.icon as any || 'help-circle'}
            size={80}
            color={theme.colors.primary}
          />
        </View>
        <Text style={styles.slideTitle}>{slide.title}</Text>
        <Text style={styles.slideDescription}>{slide.description}</Text>
        {renderAnglesGrid()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    paddingTop: 50,
  },
  headerLeft: {
    width: 48,
  },
  backButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepIndicator: {
    ...theme.typography.body,
    fontWeight: '700',
    color: theme.colors.text,
  },
  skipButton: {
    padding: theme.spacing.sm,
  },
  skipText: {
    ...theme.typography.body,
    fontWeight: '700',
    color: theme.colors.textSecondary,
  },
  slide: {
    width: SCREEN_WIDTH,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.xl,
  },
  slideContent: {
    alignItems: 'center',
    maxWidth: 400,
  },
  iconContainer: {
    width: 150,
    height: 150,
    backgroundColor: `${theme.colors.primary}20`,
    borderRadius: theme.borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.xl,
  },
  slideIcon: {
    fontSize: 80,
  },
  slideTitle: {
    ...theme.typography.h2,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  slideDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  anglesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.xl,
    gap: theme.spacing.sm,
  },
  angleItem: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  angleIcon: {
    width: 56,
    height: 56,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  angleLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  footer: {
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
    paddingTop: theme.spacing.lg,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.border,
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: theme.colors.primary,
    width: 24,
  },
  navigationButtons: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  previousButton: {
    height: 48,
    paddingHorizontal: theme.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.xl,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  previousButtonText: {
    ...theme.typography.button,
    color: theme.colors.text,
  },
  nextButton: {
    flex: 1,
  },
});
