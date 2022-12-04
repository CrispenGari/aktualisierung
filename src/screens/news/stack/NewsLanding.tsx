import {
  View,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { NewsStackNavProps } from "../../../params";
import NewsCard from "../../../components/NewsCard/NewsCard";
import { HeaderLeft } from "../../../components";
import { useLocation } from "../../../hooks";
import { NEWS_API_API_KEY } from "../../../keys";
import { COLORS } from "../../../constants";
const NewsLanding: React.FC<NewsStackNavProps<"NewsLanding">> = ({
  navigation,
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderLeft />,
    });
  }, []);

  const { location } = useLocation();
  const [news, setNews] = useState([]);

  useEffect(() => {
    let mounted: boolean = true;
    const _country: string = (
      location as any
    )?.apiInfo?._z?.country.toLowerCase();
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

  return (
    <TouchableWithoutFeedback
      style={{
        backgroundColor: "red",
        height: Dimensions.get("screen").height,
      }}
      onPress={Keyboard.dismiss}
    >
      <ScrollView
        style={{ flex: 1, padding: 10, backgroundColor: COLORS.main }}
        bounces={false}
      >
        {news.map((_new, id) => (
          <NewsCard key={id} _new={_new} navigation={navigation} />
        ))}

        <View style={{ height: 150 }} />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default NewsLanding;
