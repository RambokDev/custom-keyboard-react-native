import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomKeyboard from "./Components/CustomKeyboard";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CustomKeyboard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
