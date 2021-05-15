import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, StyleSheet, Text, TextStyle, View } from "react-native";

interface IProp {
  navigation: StackNavigationProp<{ Signup: undefined }>;
}

const SigninScreen = ({ navigation }: IProp) => {
  return (
    <>
      <Text style={styles.fontSize}>Signin Screen</Text>
      <Button
        title={"Go to signup"}
        onPress={() => navigation.navigate("Signup")}
      ></Button>
    </>
  );
};

export default SigninScreen;

const styles = StyleSheet.create<{ fontSize: TextStyle }>({
  fontSize: {
    fontSize: 48,
  },
});
