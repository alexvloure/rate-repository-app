import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../theme';
import { FontWeightType } from '../types';

interface StyledTextProps {
  align?: string;
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: FontWeightType;
  style?: any;
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal as FontWeightType,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold as FontWeightType,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
});

export default function StyledText({
  align,
  children,
  color,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}: StyledTextProps) {
  const textStyles = [
    styles.text,
    style,
    align === 'center' && styles.textAlignCenter,
    color === 'blueViolet' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
