import { View, Text, StatusBar, Image, SafeAreaView } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,

        padding: 10,
        backgroundColor: COLORS.main,
      }}
    >
      <StatusBar barStyle={"light-content"} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.main,
        }}
      >
        <Image
          source={{
            uri: Image.resolveAssetSource(require("../../../assets/logo.png"))
              .uri,
          }}
          style={{
            width: 200,
            height: 200,
            marginBottom: 30,
          }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 35,
            textTransform: "uppercase",
            letterSpacing: 2,
            fontWeight: "700",
          }}
        >
          aktualisierung
        </Text>
      </View>
      <SafeAreaView>
        <Text style={{ textAlign: "center", color: COLORS.gray, padding: 10 }}>
          Get real time updates on your phone.
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default Loading;
