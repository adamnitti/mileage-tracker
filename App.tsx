import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

export default function App() {
  const ROOT: ViewStyle = {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <View style={ROOT}>
      <Text>MILEAGE TRACKER</Text>
      <StatusBar style="auto" />
    </View>
  );
}
