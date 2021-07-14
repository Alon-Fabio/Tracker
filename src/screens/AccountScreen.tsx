import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialCommunityIcons as AccountIcon } from "@expo/vector-icons";

import { Context as AuthContext } from "../context/AuthContext";

import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <Spacer>
        <Text style={styles.fontSize}>Account Screen</Text>
        <Button title="Sign out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <AccountIcon name="account-cog" size={24} color="blue" />,
};

const styles = StyleSheet.create({
  fontSize: {
    fontSize: 48,
  },
});
export default AccountScreen;
