import { Text, View, Keyboard } from "react-native";
import React from "react";
import { WeatherStackNavProps } from "../../../params";
import { ScrollView } from "react-native-gesture-handler";
import { FONTS, COLORS } from "../../../constants";
import { useLocation } from "../../../hooks";
import { Form, DynamicWeatherCard } from "../../../components";
import * as Location from "expo-location";
import { OPEN_WEATHER_MAP_API_KEY } from "../../../keys";

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

  const [weather, setWeather] = React.useState<any>();
  const [city, setCity] = React.useState(
    (location as any)?.apiInfo?._z?.city ?? ""
  );
  const [loading, setLoading] = React.useState(false);
  const [searchedLocation, setSearchedLocation] = React.useState<any>(null);

  React.useEffect(() => {
    let mounted: boolean = true;
    if (mounted && !!location) {
      setSearchedLocation(location);
    }
    return () => {
      mounted = false;
    };
  }, [location]);
  React.useEffect(() => {
    let mounted: boolean = true;
    if (mounted && !!location) {
      (async () => {
        setLoading(true);
        const {
          coords: { latitude: lat, longitude: lon },
        } = await Location.getCurrentPositionAsync({});
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPEN_WEATHER_MAP_API_KEY}`
        );
        const data = await res.json();
        setWeather(data);
        setLoading(false);
      })();
    }
    return () => {
      mounted = false;
    };
  }, []);

  const searchWeather = async () => {
    if (!!!city.trim()) return;
    setLoading(true);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city
        .trim()
        .toLowerCase()}&units=metric&appid=${OPEN_WEATHER_MAP_API_KEY}`
    );
    const data = await res.json();
    setWeather(data);
    setLoading(false);

    const l = await Location.geocodeAsync(city.trim(), {
      useGoogleMaps: false,
    });
    const { latitude, longitude } = l[0];

    const reversed = await Location.reverseGeocodeAsync(
      {
        latitude,
        longitude,
      },
      { useGoogleMaps: false }
    );
    setSearchedLocation((state: any) => ({
      ...state,
      reversed: reversed[0],
    }));
  };
  return (
    <ScrollView
      style={{ flex: 1, padding: 10, backgroundColor: COLORS.main }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <Form
        placeholder="search city"
        value={city}
        onChangeText={(text) => setCity(text)}
        onSearchButtonPress={searchWeather}
        onSubmitEditing={() => {
          Keyboard.dismiss();
          searchWeather();
        }}
      />
      <View style={{ height: 20 }} />

      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: 400,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.NunitoSansBlack,
              fontSize: 20,
              textTransform: "lowercase",
              color: COLORS.gray,
              letterSpacing: 2,
            }}
          >
            Loading...
          </Text>
        </View>
      ) : weather ? (
        <DynamicWeatherCard weather={weather} location={searchedLocation} />
      ) : null}
    </ScrollView>
  );
};

export default WeatherLanding;
