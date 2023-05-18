import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Formik, useField } from 'formik';
import StyledTextInput from '../components/StyledTextInput';
import { loginValidationSchema } from '../validationSchemas/login';
import StyledText from '../components/StyledText';

const initialValues = {
  email: '',
  password: '',
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
  errorText: {
    color: '#d73a4a',
    marginBottom: 10,
    marginTop: -5,
    fontSize: 12,
  },
});

interface FormikInputValueProps {
  name: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const FormikInputValue = ({ name, ...props }: FormikInputValueProps) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTextInput
        value={field.value}
        error={meta.error}
        onChangeText={(value: string) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && (
        <StyledText style={styles.errorText}>{meta.error}</StyledText>
      )}
    </>
  );
};

export default function LogInPage() {
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}>
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name="email" placeholder="Email" />
            <FormikInputValue
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button title="Log In" onPress={handleSubmit} />
          </View>
        );
      }}
    </Formik>
  );
}
