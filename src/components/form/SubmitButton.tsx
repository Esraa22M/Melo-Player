import { StyleSheet, Button } from 'react-native';
import { FC } from 'react';
import { useFormikContext } from 'formik';
interface Props {
  title: string;
}

const SubmitButton: FC<Props> = props => {
  const { handleSubmit } = useFormikContext();
  return <Button title={props.title} onPress={() => handleSubmit()} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default SubmitButton;
