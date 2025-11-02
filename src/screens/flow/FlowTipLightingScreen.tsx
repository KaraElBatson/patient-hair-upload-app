import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../../types';
import { theme } from '../../theme';

type FlowTipLightingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FlowTipLighting'
>;

interface Props {
  navigation: FlowTipLightingScreenNavigationProp;
}

export default function FlowTipLightingScreen({ navigation }: Props) {
  const handleNext = () => {
    navigation.navigate('FlowTipFocus');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Section Title */}
        <Text style={styles.sectionTitle}>Quick Tips for Great Photos</Text>

        {/* Tip Card */}
        <View style={styles.tipCard}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="white-balance-sunny"
              size={48}
              color={theme.colors.primary}
            />
          </View>

          <Text style={styles.tipTitle}>Good Lighting</Text>

          <Text style={styles.tipText}>
            Use natural, even light and avoid shadows. A plain, neutral background works best.
          </Text>
        </View>
      </View>

      {/* Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.xl,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  tipCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    ...theme.shadows.medium,
  },
  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: `${theme.colors.primary}20`,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.lg,
  },
  tipTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  tipText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  footer: {
    paddingHorizontal: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
  button: {
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
  },
});
