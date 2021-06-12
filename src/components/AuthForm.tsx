import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import Spacer from "../components/Spacer";

interface IAuthFormProps {
  errorMessage?: string;
  authTitle: string;
  formSubmitTitle: string;
  onFormSubmit: Function;
}

const AuthForm: React.FC<IAuthFormProps> = ({
  errorMessage,
  authTitle,
  formSubmitTitle,
  onFormSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h3>{authTitle}</Text>
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
      {errorMessage ? <Text style={styles.errMSG}>{errorMessage}</Text> : null}
      <Spacer>
        <Button
          title={formSubmitTitle}
          onPress={() => onFormSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  errMSG: {
    fontSize: 16,
    color: "red",
    marginHorizontal: 15,
  },
});
