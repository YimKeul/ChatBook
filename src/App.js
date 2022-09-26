import React, { useState } from "react";
import { StatusBar, View, Text, SafeAreaView, Image } from "react-native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const cacheImages = (images) => {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const cacheFonsts = (fonts) => {
  return fonts.map((font) => Font.loadAsync(font));
};
const App = () => {
  const [isReady, setIsReady] = useState(false);

  const _loadAssets = async () => {
    const imageAssets = cacheImages([require("../assets/splash.png")]);
    const fontAssets = cacheFonsts([]);
    await Promise.all([...imageAssets, ...fontAssets]);
  };
  //   return isReady ? (
  //   <ThemeProvider theme={theme}>
  //     <StatusBar barStyle="dark-content" />
  //     <SafeAreaView>
  //       <Text>JHello</Text>
  //     </SafeAreaView>
  //   </ThemeProvider>
  //   ) : (
  //   <AppLoading
  //     startAsync={_loadAssets}
  //     onFinish={() => setIsReady(true)}
  //     onError={console.warn}
  //   />
  //   );
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
