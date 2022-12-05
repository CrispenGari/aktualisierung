import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants";
import { DataTable } from "react-native-paper";

const BitCoinCard = () => {
  const [bpi, setBpi] = React.useState<any>(null);
  React.useEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      (async () => {
        const res = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const data = await res.json();
        setBpi(data);
      })();
    }
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.darkGray,
        padding: 10,
        borderRadius: 5,
      }}
      activeOpacity={0.7}
    >
      <Text
        style={{
          color: COLORS.gray,
          fontFamily: FONTS.NunitoSansItalic,
        }}
      >
        Disclaimer: {bpi?.disclaimer}
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>
            <Text
              style={{
                color: COLORS.gray,
                fontFamily: FONTS.NunitoSansExtraBold,
                fontSize: 20,
              }}
            >
              Description
            </Text>
          </DataTable.Title>
          <DataTable.Title numeric>
            <Text
              style={{
                color: COLORS.gray,
                fontFamily: FONTS.NunitoSansExtraBold,
                fontSize: 20,
              }}
            >
              Rate
            </Text>
          </DataTable.Title>
          <DataTable.Title numeric>
            <Text
              style={{
                color: COLORS.gray,
                fontFamily: FONTS.NunitoSansExtraBold,
                fontSize: 20,
              }}
            >
              Symbol
            </Text>
          </DataTable.Title>
        </DataTable.Header>
        {Object.values(bpi?.bpi ?? {})?.map((bpi: any) => (
          <DataTable.Row key={bpi.code}>
            <DataTable.Cell>
              <Text
                style={{
                  color: COLORS.gray,
                  fontFamily: FONTS.NunitoSansRegular,
                  fontSize: 12,
                }}
              >
                {bpi?.description}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text
                style={{
                  color: COLORS.gray,
                  fontFamily: FONTS.NunitoSansRegular,
                  fontSize: 12,
                }}
              >
                {Symbol(bpi?.rate_float)}
                {bpi?.rate_float?.toFixed(2)}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              {bpi?.symbol === "&#36;" ? (
                <Text style={styles.symbol__text}>&#36;</Text>
              ) : bpi?.symbol === "&pound;" ? (
                <Text style={styles.symbol__text}>&pound;</Text>
              ) : (
                <Text style={styles.symbol__text}>&euro;</Text>
              )}
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </TouchableOpacity>
  );
};

export default BitCoinCard;

const styles = StyleSheet.create({
  symbol__text: {
    color: COLORS.gray,
    fontFamily: FONTS.NunitoSansRegular,
    fontSize: 12,
  },
});
