import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  error: {
    borderColor: '#d73a4a',
  },
});

interface StyledTextInputProps {
  value: string;
  onChangeText: (value: string) => void;
  style?: any;
  error?: string;
}

const StyledTextInput = ({
  style = {},
  error,
  ...props
}: StyledTextInputProps) => {
  const inputStyle = [styles.textInput, style, error && styles.error];
  return <TextInput style={inputStyle} {...props} />;
};

export default StyledTextInput;
