import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState<
    | {
        expo: Location.LocationObject;
        apiInfo: any;
      }
    | {}
  >({});
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      const res = await fetch("https://ipinfo.io/");
      const data = res.json();
      if (status !== "granted") {
        setLocation({});
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setLocation({
        apiInfo: data,
        expo: location,
      });
    })();
  }, []);

  return {
    location,
  };
};

export default useLocation;
