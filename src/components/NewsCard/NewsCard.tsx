import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamList, NewsStackParamList } from "../../params";

interface Props {
  _new?: any;
  navigation?:
    | StackNavigationProp<NewsStackParamList, "NewsLanding", undefined>
    | StackNavigationProp<HomeStackParamList, "HomeLanding", undefined>
    | any;
}
const NewsCard: React.FC<Props> = ({ _new, navigation }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.brown,
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
      }}
      activeOpacity={0.7}
      onPress={() => {
        navigation?.navigate("ReadNews", {
          _new: _new,
        });
      }}
    >
      <View style={{}}>
        <Text
          numberOfLines={2}
          style={{
            fontFamily: FONTS.NunitoSansBold,
            color: COLORS.gray,
            marginBottom: 10,
            fontSize: 16,
          }}
        >
          {_new?.title}
        </Text>
        <Image
          style={{
            height: 200,
            width: "100%",
          }}
          source={{
            uri: _new?.urlToImage,
          }}
        />
        <Text
          style={{
            fontFamily: FONTS.NunitoSansBold,
            color: COLORS.gray,
            marginVertical: 10,
            fontSize: 12,
          }}
        >
          {_new?.description}
        </Text>
      </View>

      <Text
        style={{
          fontFamily: FONTS.NunitoSansBold,
          color: COLORS.gray,
          marginBottom: 10,
          fontSize: 16,
          textAlign: "right",
        }}
      >
        {_new?.publishedAt?.split("T")[0]} at{" "}
        {_new?.publishedAt?.split("T")[1]?.split(":")?.splice(0, 2)?.join(":")}
      </Text>
    </TouchableOpacity>
  );
};

export default NewsCard;
