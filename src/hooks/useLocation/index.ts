import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState<
    | {
        expo: Location.LocationObject;
        reversed: any;
      }
    | {}
  >({});
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLocation({});
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      const reversed = await Location.reverseGeocodeAsync(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        { useGoogleMaps: false }
      );
      setLocation({
        reversed: reversed[0],
        expo: location,
      });
    })();
  }, []);

  return {
    location,
  };
};

export default useLocation;
