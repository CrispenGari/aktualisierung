import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeStackParamList } from "../../params";
import HomeLanding from "./stacks/HomeLanding";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../constants";
import { StatusBar } from "react-native";

const Stack = createStackNavigator<HomeStackParamList>();
const Home = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle={"light-content"} />
      <Stack.Navigator
        initialRouteName="HomeLanding"
        screenOptions={{
          headerTitleStyle: { display: "none" },
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                margin: 5,
                padding: 10,
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
        <Stack.Screen name="HomeLanding" component={HomeLanding} />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default Home;
