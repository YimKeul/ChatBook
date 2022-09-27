import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const S = {
  Container: styled.View`
    align-self: center;
    margin-bottom: 30px;
  `,
  StyledImgae: styled.Image`
    background-color: ${({ theme }) => theme.backgrond};
    width: 100px;
    height: 100px;
    border-radius: ${({ rounded }) => (rounded ? 50 : 0)}px;
  `,
};

const Image = ({ url, imageStyle }) => {
  return (
    <S.Container>
      <S.StyledImgae
        source={{ uri: url }}
        style={imageStyle}
        rounded={rounded}
      />
    </S.Container>
  );
};

Image.defaultProps = {
  rounded: false,
};

Image.prototype = {
  uri: PropTypes.string,
  imageStyle: PropTypes.object,
  rounded: PropTypes.bool,
};

export default Image;
