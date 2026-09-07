import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignUp from '@/views/auth/SignUp';
function App() {
  return <AppContent />;
}

function AppContent() {
  return <SignUp />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
