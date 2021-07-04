//'?' is shorthand for writing a logic-gate ('if' statement)

import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
  LocationCallback,
} from "expo-location";

export default (shouldTrack: boolean, callBack: LocationCallback) => {
  const [err, setErr] = useState(null);

  let subscriber: { remove: Function } | null;
  useEffect(() => {
    const startTracking = async () => {
      try {
        const { status } = await requestForegroundPermissionsAsync();
        if (status === "denied")
          throw new Error("Location permission not granted");
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callBack //returns a location
        );
      } catch (error) {
        setErr(error);
      }
    };
    if (shouldTrack) {
      startTracking();
    } else {
      subscriber?.remove();
      subscriber = null;
    }
    return () => {
      if (subscriber) {
        subscriber?.remove();
      }
    };
  }, [shouldTrack, callBack]);

  return [err];
};
