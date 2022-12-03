import "react-native-gesture-handler";
import { StyleSheet, View, LogBox } from "react-native";
import { useFonts } from "expo-font";
import ReduxProvider from "./src/providers/ReduxProvider";
import Routes from "./src/pages/Routes";
import { Fonts } from "./src/constants";
import { Loading } from "./src/components";

export default function App() {
  const [loaded] = useFonts(Fonts);
  LogBox.ignoreLogs;
  if (!loaded) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <ReduxProvider>
        <Routes />
      </ReduxProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
