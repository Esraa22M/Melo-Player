import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Test from './src/components/Test';

function App() {
  return <AppContent />;
}

function AppContent() {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
