import {
  View,
  StyleSheet,
  Text,
  KeyboardTypeOptions,
  AutoCapitalize,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useFormikContext } from 'formik';
import { FC } from 'react';
import AppInput from '@/ui/AppInput';
import colors from '@/utils/colors';

interface Props {
  name: string;
  placeholder?: string;
  label?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  autoCapitalize?: AutoCapitalize | undefined;
  secureTextEntry?: boolean | undefined;
  containerStyle?: StyleProp<ViewStyle>;
}

const AuthInput: FC<Props> = props => {
  const { handleChange, values, errors, touched, handleBlur } =
    useFormikContext<{
      [key: string]: string;
    }>();
  const {
    label,
    placeholder,
    keyboardType,
    autoCapitalize,
    secureTextEntry,
    containerStyle,
    name,
  } = props;
  const errorMg = touched[name] && errors[name] ? errors[name] : undefined;
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.errorMsg}>{errorMg}</Text>
      </View>
      <AppInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        onChangeText={handleChange(name)}
        value={values[name]}
        onBlur={handleBlur(name)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  label: {
    color: colors.CONTRAST,
  },
  errorMsg: {
    color: colors.ERROR,
  },
});

export default AuthInput;
