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
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
