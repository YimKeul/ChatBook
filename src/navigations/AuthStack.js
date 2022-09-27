import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup } from "../screens";
// import { theme } from "../theme";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: "center",
        cardStyle: { backgroundColor: theme.backgroundCoor },
        headerTintColor: theme.headerTintColor,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
