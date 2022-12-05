import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { BitCoinStackNavProps } from "../../../params";
import { COLORS, FONTS } from "../../../constants";
import { BitCoinCard, BitCoinChart } from "../../../components";

const CryptoCurrencyLanding: React.FC<
  BitCoinStackNavProps<"BitCoinLanding">
> = ({ navigation }) => {
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
          Bitcoins
        </Text>
      ),
    });
  }, []);
  return (
    <ScrollView style={{ flex: 1, padding: 10, backgroundColor: COLORS.main }}>
      <View style={{ height: 10 }} />
      <Text
        style={{
          fontSize: 25,
          fontFamily: FONTS.NunitoSansExtraBold,
          letterSpacing: 3,
          color: COLORS.gray,
          width: "100%",
          textAlign: "center",
          padding: 10,
        }}
      >
        {"Bitcoin Prices Table"}
      </Text>
      <BitCoinCard />
      <View style={{ height: 10 }} />
      <BitCoinChart />
      <View style={{ height: 150 }} />
    </ScrollView>
  );
};

export default CryptoCurrencyLanding;
