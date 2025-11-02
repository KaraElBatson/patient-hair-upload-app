import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../types';
import { theme } from '../theme';

const { width } = Dimensions.get('window');
const CARD_WIDTH = Math.min(width - 32, 400);

type TutorialScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;

interface Props {
  navigation: TutorialScreenNavigationProp;
}

interface TutorialCard {
  icon: string;
  title: string;
  description: string;
  examples?: Array<{ image: string; label: string; isGood: boolean }>;
  angleIcons?: Array<{ icon: string; label: string }>;
}

const tutorialData: TutorialCard[] = [
  {
    icon: 'white-balance-sunny',
    title: 'Find Good Lighting',
    description: 'Use natural, even light and avoid shadows. A plain, neutral background works best.',
    examples: [
      { image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400', label: 'Do', isGood: true },
      { image: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=400', label: "Don't", isGood: false },
    ],
  },
  {
    icon: 'target',
    title: 'Keep it Clear & Focused',
    description: "Hold your phone at arm's length, keep it steady, and ensure your hair is in sharp focus.",
    examples: [
      { image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', label: 'Do', isGood: true },
      { image: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=400&blur=5', label: "Don't", isGood: false },
    ],
  },
  {
    icon: 'rotate-3d-variant',
    title: 'Capture All 5 Angles',
    description: 'We need five angles to get the full picture: Front, Back, Left Side, Right Side, and Top.',
    angleIcons: [
      { icon: 'emoticon-happy-outline', label: 'Front' },
      { icon: 'arrow-expand-horizontal', label: 'Back' },
      { icon: 'arrow-left', label: 'Left' },
      { icon: 'arrow-right', label: 'Right' },
      { icon: 'arrow-up', label: 'Top' },
    ],
  },
];

export default function TutorialScreen({ navigation }: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / CARD_WIDTH);
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < tutorialData.length - 1) {
      const nextPage = currentPage + 1;
      scrollViewRef.current?.scrollTo({ x: nextPage * CARD_WIDTH, animated: true });
      setCurrentPage(nextPage);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      const prevPage = currentPage - 1;
      scrollViewRef.current?.scrollTo({ x: prevPage * CARD_WIDTH, animated: true });
      setCurrentPage(prevPage);
    }
  };

  const handleSkip = () => {
    navigation.replace('PhotoUpload');
  };

  const handleReady = () => {
    navigation.navigate('PhotoUpload');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Step {currentPage + 1} of {tutorialData.length}</Text>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Intro Text */}
      <View style={styles.introSection}>
        <Text style={styles.introTitle}>A quick guide to great photos</Text>
      </View>

      {/* Scrollable Cards */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContainer}
        snapToInterval={CARD_WIDTH + 16}
        decelerationRate="fast"
      >
        {tutorialData.map((card, index) => (
          <View key={index} style={styles.cardWrapper}>
            <View style={styles.card}>
              {/* Card Header */}
              <View style={styles.cardHeader}>
                <View style={styles.iconCircle}>
                  <MaterialCommunityIcons name={card.icon as any} size={24} color={theme.colors.primary} />
                </View>
                <Text style={styles.cardTitle}>{card.title}</Text>
              </View>

              {/* Card Description */}
              <Text style={styles.cardDescription}>{card.description}</Text>

              {/* Examples Grid */}
              {card.examples && (
                <View style={styles.examplesGrid}>
                  {card.examples.map((example, idx) => (
                    <View key={idx} style={styles.exampleItem}>
                      <Image
                        source={{ uri: example.image }}
                        style={[styles.exampleImage, !example.isGood && styles.exampleImageBad]}
                      />
                      <View style={styles.exampleLabel}>
                        <MaterialCommunityIcons
                          name={example.isGood ? 'check-circle' : 'close-circle'}
                          size={16}
                          color={example.isGood ? theme.colors.success : theme.colors.error}
                        />
                        <Text
                          style={[
                            styles.exampleLabelText,
                            example.isGood ? styles.exampleLabelGood : styles.exampleLabelBad,
                          ]}
                        >
                          {example.label}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              )}

              {/* Angle Icons */}
              {card.angleIcons && (
                <View style={styles.angleIconsContainer}>
                  {card.angleIcons.map((angle, idx) => (
                    <View key={idx} style={styles.angleItem}>
                      <View style={styles.angleIconCircle}>
                        <MaterialCommunityIcons
                          name={angle.icon as any}
                          size={24}
                          color={theme.colors.textSecondary}
                        />
                      </View>
                      <Text style={styles.angleLabel}>{angle.label}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        {/* Navigation Arrows */}
        <View style={styles.navigation}>
          <TouchableOpacity
            style={[styles.navButton, currentPage === 0 && styles.navButtonDisabled]}
            onPress={handlePrev}
            disabled={currentPage === 0}
          >
            <MaterialCommunityIcons
              name="chevron-left"
              size={24}
              color={currentPage === 0 ? theme.colors.gray400 : theme.colors.text}
            />
          </TouchableOpacity>

          {/* Page Indicators */}
          <View style={styles.pageIndicators}>
            {tutorialData.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.pageIndicator,
                  index === currentPage && styles.pageIndicatorActive,
                ]}
              />
            ))}
          </View>

          <TouchableOpacity
            style={[styles.navButton, currentPage === tutorialData.length - 1 && styles.navButtonDisabled]}
            onPress={handleNext}
            disabled={currentPage === tutorialData.length - 1}
          >
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color={currentPage === tutorialData.length - 1 ? theme.colors.gray400 : theme.colors.text}
            />
          </TouchableOpacity>
        </View>

        {/* CTA Button */}
        <TouchableOpacity style={styles.ctaButton} onPress={handleReady}>
          <Text style={styles.ctaButtonText}>I'm Ready to Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundLight,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.sm,
    backgroundColor: theme.colors.backgroundLight,
  },
  backButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
  },
  skipText: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.gray500,
  },
  introSection: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  introTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.text,
    textAlign: 'center',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: theme.spacing.md,
  },
  cardWrapper: {
    width: CARD_WIDTH,
    marginRight: 16,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: `${theme.colors.primary}33`,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.md,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
    flex: 1,
  },
  cardDescription: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.md,
  },
  examplesGrid: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginTop: theme.spacing.sm,
  },
  exampleItem: {
    flex: 1,
  },
  exampleImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: theme.borderRadius.md,
  },
  exampleImageBad: {
    opacity: 0.6,
  },
  exampleLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.sm,
    gap: 6,
  },
  exampleLabelText: {
    fontSize: 12,
    fontWeight: '600',
  },
  exampleLabelGood: {
    color: theme.colors.success,
  },
  exampleLabelBad: {
    color: theme.colors.error,
  },
  angleIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  angleItem: {
    alignItems: 'center',
    flex: 1,
  },
  angleIconCircle: {
    width: 48,
    height: 48,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  angleLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.colors.gray500,
    textAlign: 'center',
  },
  footer: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.lg,
    backgroundColor: theme.colors.backgroundLight,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },
  navButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.gray200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonDisabled: {
    opacity: 0.5,
  },
  pageIndicators: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  pageIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.gray300,
  },
  pageIndicatorActive: {
    width: 16,
    height: 8,
    backgroundColor: theme.colors.primary,
  },
  ctaButton: {
    height: 48,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
  },
});
