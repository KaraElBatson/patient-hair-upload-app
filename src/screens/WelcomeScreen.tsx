import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../types';
import { theme } from '../theme';

const { height } = Dimensions.get('window');

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

interface Props {
  navigation: WelcomeScreenNavigationProp;
}

export default function WelcomeScreen({ navigation }: Props) {
  const handleGetStarted = () => {
    navigation.navigate('Onboarding');
  };

  const handleWhyPhotos = () => {
    // Navigate to help/info screen
    console.log('Why do we need these photos?');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Image Section */}
        <View style={styles.heroSection}>
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800' }}
            style={styles.heroImage}
            imageStyle={styles.heroImageStyle}
          >
            <View style={styles.heroOverlay} />
          </ImageBackground>
        </View>

        {/* Content Section */}
        <View style={styles.contentSection}>
          <View style={styles.textContent}>
            <Text style={styles.title}>Let's Capture Your Hair Journey</Text>
            <Text style={styles.subtitle}>
              We'll guide you through taking 5 photos from different angles to help analyze your hair.
            </Text>
          </View>

          {/* Time Estimate */}
          <View style={styles.infoCard}>
            <View style={styles.infoCardContent}>
              <View style={styles.iconWrapper}>
                <MaterialCommunityIcons name="clock-outline" size={24} color={theme.colors.text} />
              </View>
              <Text style={styles.infoText}>Takes about 2-3 minutes</Text>
            </View>
          </View>

          {/* Photo Tips Section */}
          <View style={styles.tipsSection}>
            <Text style={styles.sectionTitle}>Quick Tips for Great Photos</Text>

            <View style={styles.tipCard}>
              <View style={styles.tipHeader}>
                <View style={styles.tipIconContainer}>
                  <MaterialCommunityIcons name="white-balance-sunny" size={20} color={theme.colors.primary} />
                </View>
                <Text style={styles.tipTitle}>Good Lighting</Text>
              </View>
              <Text style={styles.tipDescription}>
                Use natural, even light and avoid shadows. A plain, neutral background works best.
              </Text>
            </View>

            <View style={styles.tipCard}>
              <View style={styles.tipHeader}>
                <View style={styles.tipIconContainer}>
                  <MaterialCommunityIcons name="target" size={20} color={theme.colors.primary} />
                </View>
                <Text style={styles.tipTitle}>Clear & Focused</Text>
              </View>
              <Text style={styles.tipDescription}>
                Hold your phone at arm's length, keep it steady, and ensure your hair is in sharp focus.
              </Text>
            </View>

            <View style={styles.tipCard}>
              <View style={styles.tipHeader}>
                <View style={styles.tipIconContainer}>
                  <MaterialCommunityIcons name="image-multiple" size={20} color={theme.colors.primary} />
                </View>
                <Text style={styles.tipTitle}>5 Required Angles</Text>
              </View>
              <Text style={styles.tipDescription}>
                We need photos from all five angles to get the complete picture of your hair.
              </Text>

              {/* Angles Grid */}
              <View style={styles.anglesGrid}>
                <View style={styles.angleItem}>
                  <View style={styles.angleIcon}>
                    <MaterialCommunityIcons name="account" size={20} color={theme.colors.textSecondary} />
                  </View>
                  <Text style={styles.angleLabel}>Front</Text>
                </View>
                <View style={styles.angleItem}>
                  <View style={styles.angleIcon}>
                    <MaterialCommunityIcons name="account-outline" size={20} color={theme.colors.textSecondary} />
                  </View>
                  <Text style={styles.angleLabel}>Back</Text>
                </View>
                <View style={styles.angleItem}>
                  <View style={styles.angleIcon}>
                    <MaterialCommunityIcons name="arrow-left" size={20} color={theme.colors.textSecondary} />
                  </View>
                  <Text style={styles.angleLabel}>Left</Text>
                </View>
                <View style={styles.angleItem}>
                  <View style={styles.angleIcon}>
                    <MaterialCommunityIcons name="arrow-right" size={20} color={theme.colors.textSecondary} />
                  </View>
                  <Text style={styles.angleLabel}>Right</Text>
                </View>
                <View style={styles.angleItem}>
                  <View style={styles.angleIcon}>
                    <MaterialCommunityIcons name="arrow-up" size={20} color={theme.colors.textSecondary} />
                  </View>
                  <Text style={styles.angleLabel}>Top</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.primaryButton} onPress={handleGetStarted}>
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={handleWhyPhotos}>
          <Text style={styles.secondaryButtonText}>Why do we need these photos?</Text>
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
  scrollView: {
    flex: 1,
  },
  heroSection: {
    width: '100%',
    maxHeight: height * 0.4,
    aspectRatio: 1,
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
  },
  heroImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  heroImageStyle: {
    borderRadius: theme.borderRadius.xl,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: theme.borderRadius.xl,
  },
  contentSection: {
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
  },
  textContent: {
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.md,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: theme.spacing.md,
  },
  infoCard: {
    marginTop: theme.spacing.md,
  },
  infoCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 14,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.md,
  },
  infoText: {
    fontSize: 16,
    fontWeight: '400',
    color: theme.colors.text,
    flex: 1,
  },
  tipsSection: {
    marginTop: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  tipCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  tipIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: `${theme.colors.primary}20`,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.sm,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
  },
  tipDescription: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: theme.colors.textSecondary,
  },
  anglesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.md,
    gap: theme.spacing.xs,
  },
  angleItem: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
  },
  angleIcon: {
    width: 48,
    height: 48,
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
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.lg,
    gap: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    backgroundColor: theme.colors.backgroundLight,
  },
  primaryButton: {
    height: 48,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
  },
  secondaryButton: {
    height: 48,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.primary,
  },
});
