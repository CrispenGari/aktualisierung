import {
  View,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  Text,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { NewsStackNavProps } from "../../../params";
import NewsCard from "../../../components/NewsCard/NewsCard";
import { useLocation } from "../../../hooks";
import { NEWS_API_API_KEY } from "../../../keys";
import { COLORS, FONTS } from "../../../constants";
import { Form } from "../../../components";
const NewsLanding: React.FC<NewsStackNavProps<"NewsLanding">> = ({
  navigation,
}) => {
  useLayoutEffect(() => {
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
          News
        </Text>
      ),
    });
  }, []);

  const { location } = useLocation();
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let mounted: boolean = true;
    const _country: string = (
      location as any
    )?.reversed?.isoCountryCode?.toLowerCase();
    if (mounted && !!_country) {
      (async () => {
        setLoading(true);
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${_country}&apiKey=${NEWS_API_API_KEY}`
        );
        const data = await res.json();
        setLoading(false);
        setNews(data?.articles ?? []);
      })();
    }
    return () => {
      mounted = false;
    };
  }, [location]);
  const search = async () => {
    if (!!searchTerm.trim()) {
      setLoading(true);
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${searchTerm
          .trim()
          .toLowerCase()
          .replace(" ", "%20")}&sortBy=publishedAt&apiKey=${NEWS_API_API_KEY}`
      );
      const data = await res.json();
      setLoading(false);
      setNews(data?.articles ?? []);
    }
  };

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
        <Form
          placeholder="search news"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          onSearchButtonPress={search}
          onSubmitEditing={() => {
            Keyboard.dismiss();
            search();
          }}
        />
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
        ) : (
          news.map((_new, id) => (
            <NewsCard key={id} _new={_new} navigation={navigation} />
          ))
        )}
        <View style={{ height: 150 }} />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default NewsLanding;
