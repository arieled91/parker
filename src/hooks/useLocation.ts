import React from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
  const [location, setLocation] = React.useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return {location, errorMsg}
}

export default useLocation;
