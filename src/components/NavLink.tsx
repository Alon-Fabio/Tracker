import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp,
  withNavigation,
} from "react-navigation";

import Spacer from "../components/Spacer";

interface INav {
  navigation: NavigationScreenProp<
    NavigationRoute<{ Signup: undefined } | { Signin: undefined }>
  >;
  linkText: string;
  routeName: string;
}

const NavLink: React.FC<INav> = ({
  navigation,
  linkText,
  routeName,
}): JSX.Element => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.link}>{linkText}</Text>
        </Spacer>
      </TouchableOpacity>
    </>
  );
};

export default withNavigation(NavLink);

const styles = StyleSheet.create({
  link: {
    fontSize: 16,
    color: "blue",
  },
});
