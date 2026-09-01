import { StyleSheet, Text, SafeAreaView } from 'react-native';
import colors from '@/utils/colors';
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
