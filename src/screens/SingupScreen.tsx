import React, { useState } from "react";
// Prop for type script
import { StackNavigationProp } from "@react-navigation/stack";
//Libraries
import { Text, Input, Button } from "react-native-elements";
//Components
import Spacer from "../components/Spacer";

import { StyleSheet, View } from "react-native";

interface INav {
  navigation: StackNavigationProp<{ Signin: undefined }>;
}

const SingupScreen = ({ navigation }: INav) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sing Up for Tracker</Text>
      </Spacer>
      <Input
        label={"Email"}
        value={email}
        onChangeText={setEmail}
        autoCapitalize={"none"}
        autoCorrect={false}
      />
      <Spacer children={null} />
      <Input
        label={"Password"}
        value={password}
        onChangeText={setPassword}
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry
      />
      <Spacer>
        <Button
          title={"Go to signin"}
          onPress={() => navigation.navigate("Signin")}
        />
      </Spacer>
    </View>
  );
};
SingupScreen.navigationOptions = {
  headerShown: false,
};
export default SingupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});
