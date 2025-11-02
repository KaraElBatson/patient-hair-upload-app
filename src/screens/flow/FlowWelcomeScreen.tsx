import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../../types';
import { theme } from '../../theme';

type FlowWelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FlowWelcome'
>;

interface Props {
  navigation: FlowWelcomeScreenNavigationProp;
}

export default function FlowWelcomeScreen({ navigation }: Props) {
  const handleStart = () => {
    navigation.navigate('FlowTipLighting');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <Text style={styles.header}>Let's Capture Your Hair Journey</Text>

        {/* Subtext */}
        <Text style={styles.subtext}>
          We'll guide you through taking 5 photos from different angles to help analyze your hair.
        </Text>

        {/* Info Box */}
        <View style={styles.infoBox}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={24}
            color={theme.colors.text}
          />
          <Text style={styles.infoText}>Takes about 2-3 minutes</Text>
        </View>
      </View>

      {/* Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Get Started</Text>
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
  header: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  subtext: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.md,
    paddingVertical: 16,
    paddingHorizontal: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  infoText: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.text,
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
