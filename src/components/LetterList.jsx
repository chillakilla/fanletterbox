import React, { useState } from "react";
import styled from "styled-components";
import LetterCard from "./LetterCard";
import { useLetterContext } from "../context/LetterContext";

function LetterList() {
  const { letters, member } = useLetterContext();
  const lettersForOne = letters.filter((letter) => letter.writedTo === member);

  return (
    <Container>
      <Comment>
        {lettersForOne.length === 0 ? (
          <p>아직 등록된 팬레터가 없습니다.</p>
        ) : (
          lettersForOne.map((letter) => (
            <LetterCard key={letter.id} letter={letter} />
          ))
        )}
      </Comment>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  color: black;
  margin-bottom: 20px;
`;

const Comment = styled.ul`
  transform: translateX(16%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  background-color: #e6f4f1;
  padding: 20px;
  border-radius: 10px;
  margin: 0 auto;
`;

export default LetterList;
