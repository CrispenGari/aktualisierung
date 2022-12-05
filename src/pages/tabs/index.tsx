import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from "../../params";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import TabIcon from "../../components/TabIcon/TabIcon";
import { BitCoin, Home, News, Weather } from "../../screens";
import { COLORS } from "../../constants";

const Tab = createBottomTabNavigator<AppParamList>();
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          elevation: 0,
          borderWidth: 0,
          borderColor: "transparent",
          backgroundColor: COLORS.main,
          paddingVertical: 10,
          height: 100,
          position: "absolute",
          bottom: 0,
        },
        tabBarShowLabel: false,
        tabBarBadgeStyle: {
          backgroundColor: COLORS.gray,
          color: COLORS.main,
          fontSize: 10,
          maxHeight: 20,
          maxWidth: 20,
          marginLeft: 3,
        },
        tabBarVisibilityAnimationConfig: {
          hide: {
            animation: "timing",
          },
          show: {
            animation: "spring",
          },
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (props) => (
            <TabIcon
              {...props}
              title="home"
              Icon={{
                name: "home",
                IconComponent: AntDesign,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: (props) => (
            <TabIcon
              {...props}
              title="news"
              Icon={{
                name: "news",
                IconComponent: Entypo,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BitCoin"
        component={BitCoin}
        options={{
          tabBarIcon: (props) => (
            <TabIcon
              {...props}
              title="bitcoin"
              Icon={{
                name: "coins",
                IconComponent: FontAwesome5,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Weather"
        component={Weather}
        options={{
          tabBarIcon: (props) => (
            <TabIcon
              {...props}
              title="weather"
              Icon={{
                name: "weather-lightning-rainy",
                IconComponent: MaterialCommunityIcons,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
