import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import Container from '../components/Container';
import Button from '../components/Button';
import { theme } from '../theme';

type ConfirmationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Confirmation'
>;

type ConfirmationScreenRouteProp = RouteProp<
  RootStackParamList,
  'Confirmation'
>;

interface Props {
  navigation: ConfirmationScreenNavigationProp;
  route: ConfirmationScreenRouteProp;
}

export default function ConfirmationScreen({ navigation, route }: Props) {
  const { confirmationId } = route.params;

  const handleGiveFeedback = () => {
    navigation.navigate('Feedback', { uploadId: confirmationId });
  };

  const handleDone = () => {
    navigation.navigate('PhotoUpload');
  };

  return (
    <Container>
      <View style={styles.content}>
        <View style={styles.successContainer}>
          <View style={styles.checkmarkContainer}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
          <Text style={styles.title}>Upload Successful!</Text>
          <Text style={styles.subtitle}>
            Your photos have been securely uploaded and are ready for analysis
          </Text>
        </View>

        <View style={styles.infoCard}>
          <InfoRow label="Confirmation ID" value={confirmationId} />
          <InfoRow label="Status" value="Completed" isStatus />
        </View>

        <View style={styles.messageBox}>
          <Text style={styles.messageText}>
            Thank you for submitting your photos. You will be notified once the
            analysis is complete.
          </Text>
        </View>

        <View style={styles.actions}>
          <Button
            title="Give Feedback"
            onPress={handleGiveFeedback}
            variant="outline"
          />
          <View style={styles.spacer} />
          <Button title="Done" onPress={handleDone} />
        </View>
      </View>
    </Container>
  );
}

interface InfoRowProps {
  label: string;
  value: string;
  isStatus?: boolean;
}

function InfoRow({ label, value, isStatus }: InfoRowProps) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <View style={styles.infoValueContainer}>
        {isStatus && <View style={styles.statusDot} />}
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  successContainer: {
    alignItems: 'center',
    paddingTop: theme.spacing.xxl,
  },
  checkmarkContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: theme.colors.success,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.xl,
    ...theme.shadows.large,
  },
  checkmark: {
    fontSize: 64,
    color: theme.colors.white,
    fontWeight: '700',
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: theme.spacing.md,
  },
  infoCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginVertical: theme.spacing.xl,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
  },
  infoLabel: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
  },
  infoValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoValue: {
    ...theme.typography.body,
    color: theme.colors.text,
    fontWeight: '600',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.success,
    marginRight: theme.spacing.sm,
  },
  messageBox: {
    backgroundColor: theme.colors.primaryLight + '20',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary,
  },
  messageText: {
    ...theme.typography.bodySmall,
    color: theme.colors.text,
    lineHeight: 20,
  },
  actions: {
    marginTop: theme.spacing.lg,
  },
  spacer: {
    height: theme.spacing.md,
  },
});
