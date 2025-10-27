import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, FeedbackData } from '../types';
import Button from '../components/Button';
import { theme } from '../theme';
import { useAppStore } from '../store';
import { SUCCESS_MESSAGES } from '../constants';

type FeedbackScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Feedback'
>;

type FeedbackScreenRouteProp = RouteProp<RootStackParamList, 'Feedback'>;

interface Props {
  navigation: FeedbackScreenNavigationProp;
  route: FeedbackScreenRouteProp;
}

export default function FeedbackScreen({ navigation, route }: Props) {
  const { uploadId } = route.params;
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitFeedback = useAppStore((state) => state.submitFeedback);

  const handleSubmit = async () => {
    if (rating === 0) {
      Alert.alert('Rating Required', 'Please select a rating before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const feedback: FeedbackData = {
        rating,
        comments: comments.trim() || undefined,
        uploadId,
        timestamp: Date.now(),
      };

      submitFeedback(feedback);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      Alert.alert('Thank You!', SUCCESS_MESSAGES.FEEDBACK_SUBMITTED, [
        {
          text: 'OK',
          onPress: () => navigation.navigate('PhotoUpload'),
        },
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = () => {
    navigation.navigate('PhotoUpload');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>How was your experience?</Text>
          <Text style={styles.subtitle}>
            Your feedback helps us improve the photo upload process
          </Text>
        </View>

        <View style={styles.ratingContainer}>
          <Text style={styles.ratingLabel}>Rate your experience</Text>
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => setRating(star)}
                style={styles.starButton}
              >
                <Text style={[styles.star, star <= rating && styles.starFilled]}>
                  ★
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.commentsContainer}>
          <Text style={styles.commentsLabel}>
            Additional comments (optional)
          </Text>
          <TextInput
            style={styles.commentsInput}
            placeholder="Tell us more about your experience..."
            placeholderTextColor={theme.colors.textLight}
            multiline
            numberOfLines={6}
            textAlignVertical="top"
            value={comments}
            onChangeText={setComments}
            maxLength={500}
          />
          <Text style={styles.characterCount}>
            {comments.length}/500
          </Text>
        </View>

        <View style={styles.actions}>
          <Button
            title="Submit Feedback"
            onPress={handleSubmit}
            loading={isSubmitting}
            disabled={rating === 0}
          />
          <Button
            title="Skip"
            onPress={handleSkip}
            variant="text"
            style={styles.skipButton}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: theme.spacing.lg,
  },
  header: {
    marginBottom: theme.spacing.xl,
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
  },
  ratingContainer: {
    marginBottom: theme.spacing.xl,
  },
  ratingLabel: {
    ...theme.typography.h4,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: theme.spacing.sm,
  },
  starButton: {
    padding: theme.spacing.xs,
  },
  star: {
    fontSize: 48,
    color: theme.colors.border,
  },
  starFilled: {
    color: theme.colors.warning,
  },
  commentsContainer: {
    marginBottom: theme.spacing.xl,
  },
  commentsLabel: {
    ...theme.typography.body,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  commentsInput: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    ...theme.typography.body,
    color: theme.colors.text,
    minHeight: 120,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  characterCount: {
    ...theme.typography.caption,
    color: theme.colors.textLight,
    textAlign: 'right',
    marginTop: theme.spacing.xs,
  },
  actions: {
    marginTop: theme.spacing.md,
  },
  skipButton: {
    marginTop: theme.spacing.md,
  },
});
