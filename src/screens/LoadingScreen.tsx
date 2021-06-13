import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const LoadingScreen = () => {
  const { tryLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn();
  }, []);

  //   return (
  //     <View>
  //       <Text style={styles.load}>Loading...</Text>
  //     </View>
  //   );

  return null;
};
const styles = StyleSheet.create({
  load: {
    fontSize: 48,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 300,
  },
});
export default LoadingScreen;
