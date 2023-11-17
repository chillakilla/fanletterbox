import React from "react";
import styled from "styled-components";
import defaultImg from "../../assets/avatar.png";

export default function Avatar({ size = "small", image, alt }) {
  return (
    <ImgWrapper>
      <img src={defaultImg} alt={alt} />
    </ImgWrapper>
  );
}

const ImgWrapper = styled.figure`
  border-radius: 50%;
`;
