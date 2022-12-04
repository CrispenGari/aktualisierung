import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeStackNavProps, HomeStackParamList } from "../../params";
import HomeLanding from "./stacks/HomeLanding";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { StatusBar, TouchableOpacity } from "react-native";
import ReadNews from "../news/stack/ReadNews";
import Settings from "../settings/Settings";

const Stack = createStackNavigator<HomeStackParamList>();
const Home: React.FC<HomeStackNavProps<"HomeLanding">> = ({ navigation }) => {
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
              onPress={() =>
                navigation.navigate("HomeSettings", {
                  parent: "Home",
                })
              }
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
        <Stack.Screen name="ReadNews" component={ReadNews} />
        <Stack.Screen name="HomeSettings" component={Settings} />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default Home;
