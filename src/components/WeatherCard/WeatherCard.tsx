import { TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { useLocation } from "../../hooks";
import { COLORS, FONTS } from "../../constants";
import { FontAwesome5 } from "@expo/vector-icons";

const WeatherCard = () => {
  const { location } = useLocation();

  console.log(location);
  return (
    <TouchableOpacity style={{ backgroundColor: "#004D89", padding: 10 }}>
      <View>
        <Text>East London</Text>
      </View>
      <View>
        <FontAwesome5 name="temperature-low" size={24} color="black" />
        <FontAwesome5 name="temperature-low" size={24} color="black" />
        <Text>20º C</Text>
      </View>
      <Text
        style={{
          color: COLORS.gray,
          fontFamily: FONTS.NunitoSansExtraBoldItalic,
          fontSize: 30,
        }}
      >
        {location?.apiInfo?._z.city}
      </Text>
    </TouchableOpacity>
  );
};

export default WeatherCard;
