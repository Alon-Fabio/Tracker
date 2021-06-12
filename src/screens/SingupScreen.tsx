import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
// Prop for type script
import NavLink from "../components/NavLink";
//Type for TS
import { NavigationStackScreenComponent } from "react-navigation-stack";
//Components
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SingupScreen: NavigationStackScreenComponent = (): JSX.Element => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        authTitle={"Sign Up for Tracker"}
        formSubmitTitle={"Sign Up!"}
        errorMessage={state.errorMessage}
        onFormSubmit={signup}
      />
      <NavLink
        linkText={"Already have an account?, SignIn here!"}
        routeName={"Signin"}
      />
    </View>
  );
};
SingupScreen.navigationOptions = {
  header: () => false,
};
export default SingupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});
