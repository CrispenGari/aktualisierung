import { StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NewsStackNavProps, NewsStackParamList } from "../../params";
import { AntDesign } from "@expo/vector-icons";
import NewsLanding from "./stack/NewsLanding";
import { COLORS } from "../../constants";
import ReadNews from "./stack/ReadNews";
import Settings from "../settings/Settings";
const Stack = createStackNavigator<NewsStackParamList>();
const News: React.FC<NewsStackNavProps<"NewsLanding"> | any> = ({
  navigation,
}) => {
  return (
    <React.Fragment>
      <StatusBar barStyle={"light-content"} />
      <Stack.Navigator
        initialRouteName="NewsLanding"
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
                navigation.navigate("NewsSettings", {
                  parent: "News",
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
        <Stack.Screen name="NewsLanding" component={NewsLanding} />
        <Stack.Screen name="ReadNews" component={ReadNews} />
        <Stack.Screen name="NewsSettings" component={Settings} />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default News;
