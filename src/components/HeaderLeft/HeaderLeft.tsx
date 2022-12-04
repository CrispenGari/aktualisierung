import React from "react";
import { Dimensions, View, TextInput } from "react-native";
import { COLORS } from "../../constants";
import { EvilIcons } from "@expo/vector-icons";

const HeaderLeft = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        marginHorizontal: 10,
        width: Dimensions.get("screen").width * 0.7,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: COLORS.gray,
          paddingVertical: 3,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}
      >
        <TextInput
          placeholder="search news"
          style={{
            fontSize: 20,
            paddingVertical: 3,
            paddingHorizontal: 5,
            flex: 1,
          }}
        />
        <EvilIcons
          name="search"
          size={24}
          color="black"
          style={{
            marginLeft: 5,
          }}
        />
      </View>
    </View>
  );
};

export default HeaderLeft;
