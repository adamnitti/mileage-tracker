import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./views/LandingPage";
import MileageLog from "./views/MileageLog";
import CreateEntry from "./views/CreateEntry";
import EditEntry from "./views/EditEntry";
import GpsEntry from "./views/GpsEntry";
import GpsTrack from "./views/GpsTrack";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Mileage Log" component={MileageLog} />
        <Stack.Screen name="Create New" component={CreateEntry} />
        <Stack.Screen name="Edit Entry" component={EditEntry} />
        <Stack.Screen name="New GPS Entry" component={GpsEntry} />
        <Stack.Screen name="GPS Track" component={GpsTrack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
