import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants";
import { FontAwesome5, Feather, FontAwesome } from "@expo/vector-icons";

const DynamicWeatherCard: React.FC<any> = ({ weather, location }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        borderRadius: 5,
      }}
    >
      <ImageBackground
        style={{ padding: 10 }}
        source={{
          uri: "https://scied.ucar.edu/sites/default/files/styles/half_width/public/2021-10/How%20Weather%20Works.jpg",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: FONTS.NunitoSansExtraBold,
              color: COLORS.gray,
            }}
          >
            {(location as any)?.reversed?.city}
          </Text>
          <Text
            style={{ color: COLORS.gray, fontFamily: FONTS.NunitoSansBlack }}
          >
            {(location as any)?.reversed?.isoCountryCode}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <View>
            <View style={{ flexDirection: "row" }}>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    marginRight: 50,
                    alignItems: "center",
                  }}
                >
                  <FontAwesome5
                    name="temperature-low"
                    size={30}
                    color={COLORS.gray}
                  />
                  <Text
                    style={{
                      color: COLORS.gray,
                      fontFamily: FONTS.NunitoSansBlack,
                      marginLeft: 5,
                    }}
                  >
                    {weather?.main?.temp_min?.toFixed(0)}º
                  </Text>
                </View>
                <Text
                  style={{
                    color: COLORS.gray,
                    fontFamily: FONTS.NunitoSansBlack,
                    marginLeft: 5,
                  }}
                >
                  Maximum
                </Text>
              </View>

              <View>
                <View style={{ flexDirection: "row" }}>
                  <FontAwesome5
                    name="temperature-low"
                    size={30}
                    color={COLORS.gray}
                  />
                  <Text
                    style={{
                      color: COLORS.gray,
                      fontFamily: FONTS.NunitoSansBlack,
                      marginLeft: 5,
                    }}
                  >
                    {weather?.main?.temp_max?.toFixed(0)}º
                  </Text>
                </View>
                <Text
                  style={{
                    color: COLORS.gray,
                    fontFamily: FONTS.NunitoSansBlack,
                    marginLeft: 5,
                  }}
                >
                  Minimum
                </Text>
              </View>
            </View>
            <View style={{ marginVertical: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather name="wind" size={24} color="white" />
                <Text
                  style={{
                    color: COLORS.gray,
                    fontFamily: FONTS.NunitoSansBlack,
                    marginLeft: 5,
                  }}
                >
                  {weather?.wind?.speed}m/s
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <FontAwesome name="cloud" size={24} color="white" />
                <Text
                  style={{
                    color: COLORS.gray,
                    fontFamily: FONTS.NunitoSansBlack,
                    marginLeft: 5,
                  }}
                >
                  {weather?.clouds?.all}%
                </Text>
              </View>
            </View>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={{
                uri: `https://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`,
              }}
              style={{
                width: 80,
                height: 80,
              }}
            />
            <Text
              style={{
                fontSize: 50,
                fontFamily: FONTS.NunitoSansExtraBold,
                color: COLORS.gray,
              }}
            >
              {weather?.main?.temp?.toFixed(0)}ºC
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: FONTS.NunitoSansItalic,
                color: COLORS.gray,
              }}
            >
              {weather?.weather[0]?.main}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontFamily: FONTS.NunitoSansItalic,
              color: "black",
            }}
          >
            {weather?.weather[0]?.description}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: COLORS.gray,
              fontSize: 16,
              textAlign: "right",
            }}
          >
            {(location as any)?.reversed?.name}
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              fontSize: 16,
              textAlign: "right",
            }}
          >
            {(location as any)?.reversed?.district}
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              fontSize: 16,
              textAlign: "right",
            }}
          >
            {(location as any)?.reversed?.city}
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              fontSize: 16,
              textAlign: "right",
            }}
          >
            {(location as any)?.reversed?.street}
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              fontSize: 16,
              textAlign: "right",
            }}
          >
            {(location as any)?.reversed?.postalCode}
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              fontSize: 16,
              textAlign: "right",
            }}
          >
            {(location as any)?.reversed?.region}
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              fontSize: 16,
              textAlign: "right",
            }}
          >
            {(location as any)?.reversed?.country}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default DynamicWeatherCard;
