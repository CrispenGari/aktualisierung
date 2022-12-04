import { Text } from "react-native";
import React from "react";
import { WeatherStackNavProps } from "../../../params";
import { ScrollView } from "react-native-gesture-handler";
import { FONTS, COLORS } from "../../../constants";
import { useLocation } from "../../../hooks";

const WeatherLanding: React.FC<WeatherStackNavProps<"WeatherLanding">> = ({
  navigation,
}) => {
  const { location } = useLocation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Text
          style={{
            marginLeft: 10,
            fontFamily: FONTS.NunitoSansBlack,
            color: COLORS.gray,
            fontSize: 20,
          }}
        >
          Weather
        </Text>
      ),
      headerTitle: (location as any)?.apiInfo?._z?.city ?? "",
      headerTitleStyle: {
        marginHorizontal: 5,
        fontFamily: FONTS.NunitoSansBlack,
        color: "white",
        fontSize: 20,
      },
    });
  }, [location]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text>WeatherLanding</Text>
    </ScrollView>
  );
};

export default WeatherLanding;
