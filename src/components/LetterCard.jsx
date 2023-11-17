import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import defaultImg from "../assets/avatar.png";
import Avatar from "./common/Avatar";

function LetterCard({ letter }) {
  console.log(letter);
  const { id, nickname, createdAt, content } = letter;
  const navigate = useNavigate();

  return (
    <Letter id={id} onClick={() => navigate(`/details/${id}`)}>
      <Writer>
        <Avatar image={defaultImg} alt="Default" />
        <NameTime>
          <span>{nickname ?? "닉네임"}</span>
          <time>
            {new Date(createdAt).toLocaleDateString("ko", {
              year: "2-digit",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }) ?? "작성시간"}
          </time>
        </NameTime>
      </Writer>

      <BodyText>{content ?? "내용물"}</BodyText>
    </Letter>
  );
}

const Letter = styled.li`
  max-width: 500px;
  background-color: #c5e1db;

  margin: 10px;

  display: flex;
  flex-direction: column;

  padding: 20px;

  border: 0px solid transparent;
  border-radius: 10px;

  cursor: pointer;
  &:hover {
    transition: all 0.2s;
    transform: scale(1.02);
  }
`;

const Writer = styled.section`
  display: flex;
`;

const NameTime = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const BodyText = styled.p`
  margin-left: 50px;
  border-radius: 10px;
  background-color: whitesmoke;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default LetterCard;
