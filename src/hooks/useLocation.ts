import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
  LocationCallback,
} from "expo-location";

type ISubscriber = {
  remove: Function;
};

export default (shouldTrack: boolean, callBack: LocationCallback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState<ISubscriber | null>({
    remove: (): void => {},
  });

  useEffect(() => {
    if (shouldTrack) {
      startTracking();
    } else {
      subscriber?.remove();
      setSubscriber(null);
    }
    return () => {
      if (subscriber) {
        subscriber?.remove();
      }
    };
  }, [shouldTrack, callBack]);

  const startTracking = async () => {
    try {
      const { status } = await requestForegroundPermissionsAsync();
      if (status === "denied")
        throw new Error("Location permission not granted");
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callBack //returns a location
      );
      setSubscriber(sub);
    } catch (error) {
      setErr(error);
    }
  };

  return [err];
};
