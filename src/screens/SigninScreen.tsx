import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";
// Prop for type script
import NavLink from "../components/NavLink";
//Type for TS
import { NavigationStackScreenComponent } from "react-navigation-stack";
//Components
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SingupScreen: NavigationStackScreenComponent = (): JSX.Element => {
  const { state, signin, clearErrMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrMessage} />
      <AuthForm
        authTitle={"Sign In to your account"}
        formSubmitTitle={"Sign In"}
        errorMessage={state.errorMessage}
        onFormSubmit={signin}
      />
      <NavLink
        linkText={"Don't have an account? SignUp here!"}
        routeName={"Signup"}
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
