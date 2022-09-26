import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const S = {
  Container: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.backgrond};
  `,
};

const Signup = ({ navigation }) => {
  return (
    <S.Container>
      <Text style={{ fontSize: 30 }}>Signup Screen</Text>
    </S.Container>
  );
};

export default Signup;
