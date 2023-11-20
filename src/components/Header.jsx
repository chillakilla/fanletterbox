import React from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setMember } from "../redux/modules/memberAction";

function Header() {
  const dispatch = useDispatch();
  const member = useSelector((state) => state.member);
  const handleTabClick = (newMember) => {
    dispatch(setMember(newMember));
  };

  return (
    <Container>
      <Title>AESPA</Title>
      <TabWrapper>
        <Tab $member={member} onClick={() => handleTabClick("카리나")}>
          카리나
        </Tab>
        <Tab $member={member} onClick={() => handleTabClick("윈터")}>
          윈터
        </Tab>
        <Tab $member={member} onClick={() => handleTabClick("닝닝")}>
          닝닝
        </Tab>
        <Tab $member={member} onClick={() => handleTabClick("지젤")}>
          지젤
        </Tab>
      </TabWrapper>
    </Container>
  );
}

const Container = styled.header`
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-15%);
  font-size: 100px;
  font-weight: 500;
  color: white;
  min-width: 475px;
`;

const TabWrapper = styled.ul`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-34%);
  display: flex;
  justify-content: space-between;
  border: 0px solid white;
  border-radius: 10px;
  padding: 15px;
  width: 500px;
  background-color: transparent;
`;

const Tab = styled.li`
  font-size: 22px;
  border: 1px solid gainsboro;
  border-radius: 5px;
  box-shadow: 2px 3px 3px #777;
  width: 100px;
  padding: 5px;
  text-align: center;
  background-color: transparent;
  color: white;
  user-select: none;
  cursor: pointer;
  ${({ $member, children }) =>
    $member === children &&
    css`
      background-color: white;
      color: #e2a0fa;
    `}
  &:hover {
    background-color: white;
    color: #e2a0fa;
  }
  &:active {
    transform: scale(0.95);
    transition: all 0.2s;
  }
`;

export default Header;
