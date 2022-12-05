import { Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { HomeStackNavProps } from "../../../params";
import { COLORS, FONTS } from "../../../constants";
import { BitCoinCard, WeatherCard } from "../../../components";
import NewsCard from "../../../components/NewsCard/NewsCard";
import { useLocation } from "../../../hooks";
import { NEWS_API_API_KEY } from "../../../keys";

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

  const { location } = useLocation();
  const [news, setNews] = useState([]);
  const [_new, setNew] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let mounted: boolean = true;
    const _country: string = (
      location as any
    )?.reversed?.isoCountryCode?.toLowerCase();
    if (mounted && !!_country) {
      (async () => {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${_country}&apiKey=${NEWS_API_API_KEY}`
        );
        const data = await res.json();
        setNews(data?.articles ?? []);
      })();
    }
    return () => {
      mounted = false;
    };
  }, [location]);

  useEffect(() => {
    let mounted: boolean = true;
    let intervalId: any;
    if (mounted && !!news.length) {
      intervalId = setInterval(() => {
        if (news.length - 1 === index) {
          setIndex(0);
        } else {
          setIndex((i) => i + 1);
        }
      }, 10000);
    }
    return () => {
      mounted = false;
      clearInterval(intervalId as any);
    };
  }, [index, news]);

  useEffect(() => {
    let mounted: boolean = true;
    let intervalId: any;
    if (mounted && !!news.length) {
      setNew(news[index]);
    }
    return () => {
      mounted = false;
      clearInterval(intervalId as any);
    };
  }, [index, news]);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.main,
      }}
    >
      <WeatherCard />
      {!!_new ? <NewsCard _new={_new} navigation={navigation} /> : null}
      <BitCoinCard />
      <View style={{ height: 140 }} />
    </ScrollView>
  );
};

export default HomeLanding;
