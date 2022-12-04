import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { useLocation } from "../../hooks";
import { COLORS, FONTS } from "../../constants";
import { FontAwesome5, Feather, FontAwesome } from "@expo/vector-icons";
import { OPEN_WEATHER_MAP_API_KEY } from "../../keys";
import * as Location from "expo-location";

const WeatherCard = () => {
  const { location } = useLocation();
  const [weather, setWeather] = React.useState<any>();

  React.useEffect(() => {
    let mounted: boolean = true;
    if (mounted && !!location) {
      (async () => {
        const {
          coords: { latitude: lat, longitude: lon },
        } = await Location.getCurrentPositionAsync({});
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPEN_WEATHER_MAP_API_KEY}`
        );
        const data = await res.json();
        setWeather(data);
      })();
    }
    return () => {
      mounted = false;
    };
  }, []);

  if (!!!weather?.weather) {
    return <View />;
  }
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
            {(location as any)?.apiInfo?._z?.city}
          </Text>
          <Text
            style={{ color: COLORS.gray, fontFamily: FONTS.NunitoSansBlack }}
          >
            {(location as any)?.apiInfo?._z?.country}
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
              color: COLORS.gray,
            }}
          >
            {weather?.weather[0]?.description}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default WeatherCard;
