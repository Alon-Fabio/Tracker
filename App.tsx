import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SingupScreen from "./src/screens/SingupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";

interface TrackListFlow {
  TrackDetail: undefined;
  TrackList: undefined;
}

interface ISwitchNav {
  logFlow: { Signin: undefined; Signup: undefined };
  mainFlow: {
    TrackListFlow: TrackListFlow;
    TrackCreate: undefined;
    Account: undefined;
  };
}

const switchNavigator = createSwitchNavigator({
  logFlow: createStackNavigator({ Signup: SingupScreen, Signin: SigninScreen }),
  mainFlow: createBottomTabNavigator({
    TrackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
