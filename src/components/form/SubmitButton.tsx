import { StyleSheet, Button } from 'react-native';
import { FC } from 'react';
import { useFormikContext } from 'formik';
import AppButton from '@/ui/AppButton';
interface Props {
  title: string;
}

const SubmitButton: FC<Props> = props => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={props.title} onPress={() => handleSubmit()} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default SubmitButton;
