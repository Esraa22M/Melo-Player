import {
  View,
  StyleSheet,
  Text,
  KeyboardTypeOptions,
  AutoCapitalize,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { FC } from 'react';
import AppInput from '@/ui/AppInput';
import colors from '@/utils/colors';

interface Props {
  placeholder?: string;
  label?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  autoCapitalize?: AutoCapitalize | undefined;
  secureTextEntry?: boolean | undefined;
  containerStyle?: StyleProp<ViewStyle>;
}

const AuthInput: FC<Props> = props => {
  const {
    label,
    placeholder,
    keyboardType,
    autoCapitalize,
    secureTextEntry,
    containerStyle,
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <AppInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    color: colors.CONTRAST,
    padding: 5,
  },
});

export default AuthInput;
