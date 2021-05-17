import React from "react";
// Prop for type script
import { StackNavigationProp } from "@react-navigation/stack";

import { Button, StyleSheet, Text, TextStyle } from "react-native";

interface INav {
  navigation: StackNavigationProp<{ Signup: undefined; mainFlow: undefined }>;
}

const SigninScreen = ({ navigation }: INav) => {
  return (
    <>
      <Text style={styles.fontSize}>Sign In</Text>
      <Button
        title={"Go to signup"}
        onPress={() => navigation.navigate("Signup")}
      />
      <Button
        title={"Go to Main"}
        onPress={() => navigation.navigate("mainFlow")}
      />
    </>
  );
};

export default SigninScreen;

const styles = StyleSheet.create<{ fontSize: TextStyle }>({
  fontSize: {
    fontSize: 48,
  },
});
