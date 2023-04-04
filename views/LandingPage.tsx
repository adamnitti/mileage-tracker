import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ViewStyle } from "react-native";

const LandingPage = () => {
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
};
export default LandingPage;
