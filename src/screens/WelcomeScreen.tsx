import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import Container from '../components/Container';
import Button from '../components/Button';
import { theme } from '../theme';
import { useAppStore } from '../store';

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

interface Props {
  navigation: WelcomeScreenNavigationProp;
}

export default function WelcomeScreen({ navigation }: Props) {
  const skipOnboarding = useAppStore((state) => state.skipOnboarding);

  const handleGetStarted = () => {
    navigation.navigate('Onboarding');
  };

  const handleSkip = () => {
    skipOnboarding();
    navigation.replace('PhotoUpload');
  };

  return (
    <Container>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>📸</Text>
          </View>
          <Text style={styles.title}>Hair Photo Upload</Text>
          <Text style={styles.subtitle}>
            Welcome! Let's capture your hair photos for professional analysis.
          </Text>
        </View>

        <View style={styles.features}>
          <FeatureItem
            icon="✓"
            title="Easy to Use"
            description="Simple step-by-step guidance throughout the process"
          />
          <FeatureItem
            icon="🔒"
            title="Secure & Private"
            description="Your photos are encrypted and anonymized"
          />
          <FeatureItem
            icon="⚡"
            title="Quick Upload"
            description="Fast and reliable photo upload process"
          />
        </View>

        <View style={styles.actions}>
          <Button title="Get Started" onPress={handleGetStarted} />
          <Button
            title="Skip Tutorial"
            onPress={handleSkip}
            variant="text"
            style={styles.skipButton}
          />
        </View>
      </View>
    </Container>
  );
}

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <View style={styles.featureItem}>
      <Text style={styles.featureIcon}>{icon}</Text>
      <View style={styles.featureText}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: theme.spacing.xxl,
  },
  iconContainer: {
    width: 120,
    height: 120,
    backgroundColor: theme.colors.primaryLight,
    borderRadius: theme.borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.xl,
  },
  icon: {
    fontSize: 64,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  features: {
    marginVertical: theme.spacing.xl,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
  },
  featureIcon: {
    fontSize: 32,
    marginRight: theme.spacing.md,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    ...theme.typography.h4,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  featureDescription: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
  },
  actions: {
    marginBottom: theme.spacing.lg,
  },
  skipButton: {
    marginTop: theme.spacing.md,
  },
});
