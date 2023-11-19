import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import LetterList from "components/LetterList";
import Form from "../components/Form";
import styled from "styled-components";
import { useLetterContext } from "context/LetterContext";

function Home() {
  const { letters, setLetters, member, setMember } = useLetterContext();
  const navigate = useNavigate();

  return (
    <Container>
      <Header member={member} setMember={setMember} />
      <Form />
      <LetterList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
