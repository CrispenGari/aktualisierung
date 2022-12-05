import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FONTS, COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { HomeStackNavProps } from "../../params";

const Settings: React.FC<HomeStackNavProps<"HomeSettings"> | any> = ({
  navigation,
  route: {
    params: { parent },
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
            {parent}
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Text
        style={{
          color: COLORS.darkGray,
          fontFamily: FONTS.NunitoSansRegular,
        }}
      >
        No settings implemented on this app.
      </Text>
    </View>
  );
};

export default Settings;
