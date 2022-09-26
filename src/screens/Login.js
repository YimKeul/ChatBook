import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import { Text, Button } from "react-native";
import { Image, Input } from "../Components";
import { images } from "../utils/images";
const S = {
  Container: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.backgrond};
    padding: 20px;
  `,
};

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  return (
    <S.Container>
      <Image url={images.logo} imageStyle={{ borderRadius: 8 }} />
      <Input
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        onSubmitEditing={() => passwordRef.current.focuse()}
        placeholder="Email"
        returnKeyType="next"
      />
      <Input
        ref={passwordRef}
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        onSubmitEditing={() => {}}
        placeholder="Password"
        returnKeyType="done"
        isPassword
      />
      <Button title="SignUp" onPress={() => navigation.navigate("Signup")} />
    </S.Container>
  );
};

export default Login;
