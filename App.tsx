import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { FontAwesome5 as TracksIcon } from "@expo/vector-icons";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SingupScreen from "./src/screens/SingupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import { setNavigator } from "./src/navigationRef";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";

const TrackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
});

TrackListFlow.navigationOptions = {
  title: "Tracks",
  tabBarIcon: <TracksIcon name="map-signs" size={24} color="gray" />,
  tabBarOptions: {
    activeBackgroundColor: "lightgray",
    activeTintColor: "blue",
    allowFontScaling: true,
    labelStyle: {
      fontWeight: "700",
    },
  },
};
const switchNavigator = createSwitchNavigator({
  LoadingScreen,
  logFlow: createStackNavigator({ Signup: SingupScreen, Signin: SigninScreen }),
  mainFlow: createBottomTabNavigator({
    TrackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App
            ref={(navigator) => {
              // TS demands it!
              if (navigator !== null) {
                setNavigator(navigator);
              }
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
