import { StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BitCoinStackNavProps, BitCoinStackParamList } from "../../params";
import { COLORS } from "../../constants";
import BitCoinLanding from "./stack/BitCoinLanding";
import Settings from "../settings/Settings";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator<BitCoinStackParamList>();
const BitCoin: React.FC<BitCoinStackNavProps<"BitCoinLanding"> | any> = ({
  navigation,
}) => {
  return (
    <React.Fragment>
      <StatusBar barStyle={"light-content"} />
      <Stack.Navigator
        initialRouteName="BitCoinLanding"
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
                navigation.navigate("BitCoinSettings", {
                  parent: "BitCoin",
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
        <Stack.Screen name="BitCoinLanding" component={BitCoinLanding} />
        <Stack.Screen name="BitCoinSettings" component={Settings} />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default BitCoin;
