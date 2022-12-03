import { Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { HomeStackNavProps } from "../../../params";
import { COLORS, FONTS } from "../../../constants";
import { WeatherCard } from "../../../components";

const HomeLanding: React.FC<HomeStackNavProps<"HomeLanding">> = ({
  navigation,
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Text
          style={{
            color: COLORS.gray,
            fontFamily: FONTS.NunitoSansExtraBold,
            fontSize: 20,
            paddingHorizontal: 10,
          }}
        >
          aktualisierung
        </Text>
      ),
    });
  }, []);
  return (
    <ScrollView
      bounces={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <WeatherCard />
    </ScrollView>
  );
};

export default HomeLanding;
