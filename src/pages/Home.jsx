import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import LetterList from "components/LetterList";
import Form from "../components/Form";
import styled from "styled-components";

function Home({ letters, setLetters }) {
  const [member, setMember] = useState("카리나");
  const navigate = useNavigate();

  return (
    <Container>
      <Header member={member} setMember={setMember} />
      <Form
        letters={letters}
        setLetters={setLetters}
        member={member}
        setMember={setMember}
      />
      <LetterList
        letters={letters}
        setLetters={setLetters}
        member={member}
        setMember={setMember}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
