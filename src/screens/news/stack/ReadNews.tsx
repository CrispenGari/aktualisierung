import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
} from "react-native";
import React from "react";
import { NewsStackNavProps } from "../../../params";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../../constants";
const ReadNews: React.FC<NewsStackNavProps<"ReadNews">> = ({
  navigation,
  route: {
    params: { _new },
  },
}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 10,
          }}
          activeOpacity={0.7}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="md-chevron-back-outline" size={24} color="white" />
          <Text
            style={{
              marginLeft: 5,
              fontFamily: FONTS.NunitoSansBlack,
              color: COLORS.gray,
              fontSize: 20,
            }}
          >
            News
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: FONTS.NunitoSansExtraBold,
        }}
      >
        {_new?.title}
      </Text>
      <Image
        style={{ height: 200, width: "100%", marginVertical: 10 }}
        source={{
          uri: _new?.urlToImage,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          fontFamily: FONTS.NunitoSansBold,
        }}
      >
        {_new?.description}
      </Text>

      <Text
        style={{
          fontSize: 16,
          fontFamily: FONTS.NunitoSansRegular,
          marginVertical: 10,
        }}
      >
        {_new?.content}
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: COLORS.brown,
          width: "80%",
          alignSelf: "center",
          marginVertical: 20,
          padding: 10,
          borderRadius: 999,
        }}
        activeOpacity={0.7}
        onPress={() => {
          Linking.openURL(_new?.url);
        }}
      >
        <Text
          style={{
            color: COLORS.gray,
            textAlign: "center",
            fontFamily: FONTS.NunitoSansExtraBold,
            fontSize: 20,
          }}
        >
          Read More
        </Text>
      </TouchableOpacity>

      <View style={{ height: 150 }} />
    </ScrollView>
  );
};

export default ReadNews;
