import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

//  Application Param Lists
export type AppParamList = {
  Home: undefined;
  News: {};
  Weather: undefined;
  CryptoCurrency: undefined;
};

export type AppNavProps<T extends keyof AppParamList> = {
  navigation: BottomTabNavigationProp<AppParamList, T>;
  route: RouteProp<AppParamList, T>;
};

//Home Stacks Param List
export type HomeStackParamList = {
  ReadNews: {
    _new: any;
  };
  HomeLanding: undefined;
  HomeSettings: {
    parent: "Home" | "News" | "Weather" | "CryptoCurrency";
  };
  ReadWeather: undefined;
};
export type HomeStackNavProps<T extends keyof HomeStackParamList> = {
  navigation: StackNavigationProp<HomeStackParamList, T>;
  route: RouteProp<HomeStackParamList, T>;
};

//News Stacks Param List
export type NewsStackParamList = {
  ReadNews: {
    _new: any;
  };
  NewsLanding: undefined;
  NewsSettings: {
    parent: "Home" | "News" | "Weather";
  };
};
export type NewsStackNavProps<T extends keyof NewsStackParamList> = {
  navigation: StackNavigationProp<NewsStackParamList, T>;
  route: RouteProp<NewsStackParamList, T>;
};

//Weather Stacks Param List
export type WeatherStackParamList = {
  WeatherLanding: undefined;
  WeatherSettings: {
    parent: "Home" | "News" | "Weather";
  };
};
export type WeatherStackNavProps<T extends keyof WeatherStackParamList> = {
  navigation: StackNavigationProp<WeatherStackParamList, T>;
  route: RouteProp<WeatherStackParamList, T>;
};
