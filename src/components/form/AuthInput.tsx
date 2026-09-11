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
import { FC, useEffect } from 'react';
import AppInput from '@/ui/AppInput';
import colors from '@/utils/colors';
import { TextInputProps } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
interface Props {
  name: string;
  placeholder?: string;
  label?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  autoCapitalize?: TextInputProps['autoCapitalize'] | undefined;
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
  const inputTransformValue = useSharedValue(0);
  const shakeUi = () => {
    inputTransformValue.value = withSequence(
      withTiming(-10, { duration: 50 }),
      withSpring(0, {
        damping: 10,
        mass: 0.5,
        stiffness: 300,
        energyThreshold: 0.01,
      }),
    );
  };
  const inputStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: inputTransformValue.value }] };
  });
  useEffect(() => {
    if (errorMg) shakeUi();
  }, [errorMg]);
  return (
    <Animated.View style={[containerStyle, inputStyle]}>
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
    </Animated.View>
  );
};

const styles = StyleSheet.create({
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
