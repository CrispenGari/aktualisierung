import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { COLORS } from "../../constants";
import { WeatherStackNavProps, WeatherStackParamList } from "../../params";
import WeatherLanding from "./stacks/WeatherLanding";
import { StatusBar, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Settings from "../settings/Settings";
const Stack = createStackNavigator<WeatherStackParamList>();
const Weather: React.FC<WeatherStackNavProps<"WeatherLanding">> = ({
  navigation,
}) => {
  return (
    <React.Fragment>
      <StatusBar barStyle={"light-content"} />
      <Stack.Navigator
        initialRouteName="WeatherLanding"
        screenOptions={{
          headerTitleStyle: { display: "none" },
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                margin: 5,
                padding: 10,
              }}
              onPress={() => {
                navigation.navigate("WeatherSettings", {
                  parent: "Weather",
                });
              }}
            >
              <AntDesign name="setting" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: COLORS.main,
            height: 100,
            elevation: 0,
            borderBottomWidth: 0,
          },
        }}
      >
        <Stack.Screen name="WeatherLanding" component={WeatherLanding} />
        <Stack.Screen name="WeatherSettings" component={Settings} />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default Weather;
