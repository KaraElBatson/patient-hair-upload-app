import React from 'react';
import { View, StyleSheet, ViewStyle, SafeAreaView } from 'react-native';
import { theme } from '../theme';

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  useSafeArea?: boolean;
}

export default function Container({
  children,
  style,
  useSafeArea = true,
}: ContainerProps) {
  const Wrapper = useSafeArea ? SafeAreaView : View;

  return <Wrapper style={[styles.container, style]}>{children}</Wrapper>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
  },
});
