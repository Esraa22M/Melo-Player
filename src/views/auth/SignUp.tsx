import { View, StyleSheet, Button } from 'react-native';
import { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFormikContext } from 'formik';
import * as yup from 'yup';
import AuthInput from '@/components/form/AuthInput';
import colors from '@/utils/colors';
import Form from '@/components/form';
import SubmitButton from '@/components/form/SubmitButton';
interface Props {}
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
const signupSchema = yup.object({
  name: yup
    .string()
    .trim()
    .strict()
    .min(3, 'Invalid name ')
    .required('Name is required!'),
  email: yup
    .string()
    .trim()
    .strict()

    .email('Invalid Email ')
    .required('Email is required!'),
  password: yup
    .string()
    .trim()
    .strict()

    .min(8, 'Password is too short!')
    .matches(passwordRegex)
    .required('Password is required!'),
});
const intialValues = { name: '', email: '', password: '' };

const SignUp: FC<Props> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Form
        initialValues={intialValues}
        validationSchema={signupSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <View style={styles.formContainer}>
          <AuthInput
            label="Name"
            placeholder="Esraa Mohamed"
            containerStyle={styles.marginBottom}
            name={'name'}
          />
          <AuthInput
            label="Email"
            placeholder="esraa@gmail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            containerStyle={styles.marginBottom}
            name={'email'}
          />

          <AuthInput
            label="Password"
            placeholder="********"
            secureTextEntry
            name={'password'}
          />
          <SubmitButton title="Sign Up" />
        </View>
      </Form>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 15,
  },
  marginBottom: { marginBottom: 20 },
});

export default SignUp;
