import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ViewStyle } from "react-native";

const LandingPage = ({ navigation }) => {
  const ROOT: ViewStyle = {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  };

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Mileage Log");
    }, 3000);
  }, []);

  return (
    <View style={ROOT}>
      <Text>MILEAGE TRACKER</Text>
      <StatusBar style="auto" />
    </View>
  );
};
export default LandingPage;
