import { StyleSheet, View } from 'react-native';
import Dashboard from './src/screens/Dashboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});