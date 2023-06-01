import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./AuthStack";
import AppNavigator from "./AppNavigator";
import { AuthenticationContext } from "../authentication/authentication.context";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../redux/store";

const store = configureStore();

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        {isAuthenticated ? <AppNavigator /> : <AuthStack />}
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default Navigation;
