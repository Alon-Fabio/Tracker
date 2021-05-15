import React from "react";
import { StyleSheet, Text, TextStyle, View } from "react-native";

const AccountScreen = () => {
  return (
    <View>
      <Text style={styles.fontSize}>Account Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fontSize: {
    fontSize: 48,
  },
});
export default AccountScreen;
