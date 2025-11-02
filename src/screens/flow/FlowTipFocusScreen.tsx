import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../../types';
import { theme } from '../../theme';

type FlowTipFocusScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FlowTipFocus'
>;

interface Props {
  navigation: FlowTipFocusScreenNavigationProp;
}

export default function FlowTipFocusScreen({ navigation }: Props) {
  const handleNext = () => {
    navigation.navigate('FlowCaptureFront');
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
              name="target"
              size={48}
              color={theme.colors.primary}
            />
          </View>

          <Text style={styles.tipTitle}>Clear & Focused</Text>

          <Text style={styles.tipText}>
            Hold your phone at arm's length, keep it steady, and ensure your hair is in sharp focus.
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
