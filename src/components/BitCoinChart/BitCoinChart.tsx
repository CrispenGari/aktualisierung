import { View, Dimensions, Text } from "react-native";
import { BarChart } from "react-native-chart-kit";
import React from "react";
import { COLORS, FONTS } from "../../constants";

const BitCoinChart = () => {
  const [bpi, setBpi] = React.useState<any>(null);
  const [haveData, setHaveData] = React.useState(false);
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

  const [labels, setLabels] = React.useState<any[]>([]);
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    let mounted: boolean = true;
    if (mounted && !!bpi?.bpi) {
      setData(Object.values(bpi?.bpi ?? {})?.map((p: any) => p?.rate_float));
      setLabels(Object.keys(bpi?.bpi ?? {}));
      setHaveData(true);
    }
    return () => {
      mounted = false;
    };
  }, [bpi]);
  return (
    <View>
      {!haveData ? (
        <View
          style={{
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              letterSpacing: 2,
              fontFamily: FONTS.NunitoSansBold,
              color: "white",
            }}
          >
            loading...
          </Text>
        </View>
      ) : (
        <View>
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
            {bpi?.chartName + " Prices Chat"}
          </Text>
          <BarChart
            data={{
              labels,
              datasets: [
                {
                  data,
                  withDots: true,
                  color: (opacity = 1) => `rgba(34, 255, 244, ${opacity})`,
                  withScrollableDot: true,
                },
              ],
            }}
            fromZero
            width={Dimensions.get("window").width * 0.95}
            height={Dimensions.get("window").height * 0.4}
            yAxisLabel="  "
            yAxisSuffix=""
            chartConfig={{
              backgroundGradientFrom: COLORS.main,
              backgroundGradientFromOpacity: 1,
              backgroundGradientTo: COLORS.brown,
              backgroundGradientToOpacity: 0.5,
              color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
              strokeWidth: 3,
              barPercentage: 1,
              propsForDots: {
                r: "2",
                strokeWidth: "2",
                stroke: COLORS.darkGray,
              },
            }}
            verticalLabelRotation={30}
            horizontalLabelRotation={-30}
          />
        </View>
      )}
    </View>
  );
};

export default BitCoinChart;
