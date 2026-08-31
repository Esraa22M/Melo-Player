import { View, StyleSheet } from 'react-native';
import { FC } from 'react';

interface Props {}

const TestComponent: FC<Props> = props => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default TestComponent;
