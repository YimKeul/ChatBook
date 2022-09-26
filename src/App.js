import React from "react";
import { StatusBar, View, Text, SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>JHello</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
