import { View, StyleSheet, TextInput, Text } from 'react-native';
import { FC } from 'react';
import colors from '@/utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppInput from '@/ui/AppInput';
import AuthInput from '@/components/AuthInput';
interface Props {}

const SignUp: FC<Props> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <AuthInput
          label="Name"
          placeholder="Esraa Mohamed"
          containerStyle={styles.marginBottom}
        />
        <AuthInput
          label="Email"
          placeholder="esraa@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          containerStyle={styles.marginBottom}
        />

        <AuthInput label="Password" placeholder="********" secureTextEntry />
      </View>
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
