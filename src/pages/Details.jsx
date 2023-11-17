import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Avatar from "../components/common/Avatar";
import Button from "components/common/Button";

export default function Detail({ letters, setLetters }) {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState("");

  const navigate = useNavigate();

  const detailData = letters.find((letter) => letter.id === id);
  const { nickname, avatar, content, createdAt, writedTo } = detailData || {};

  const handleDelete = () => {
    const answer = window.confirm("정말로 삭제하시겠습니까?");
    if (!answer) return;

    navigate("/");
    setLetters((prevLetters) =>
      prevLetters.filter((letter) => letter.id !== id)
    );
  };

  const handleEdit = () => {
    if (!editingText) return alert("수정된 부분이 없습니다.");
    setIsEditing(false);
    const answer = window.confirm("이대로 수정하시겠습니까?");
    if (!answer) return;

    setLetters((prevLetters) => {
      console.log(prevLetters);
      return [...prevLetters].map((letter) =>
        letter.id === id ? { ...letter, content: editingText } : letter
      );
    });
    navigate("/");
  };

  return (
    <Container>
      <ToHome onClick={() => navigate("/")}>HOME</ToHome>
      <DetailWrapper>
        <div>
          <LetterHeader>
            <UserWrapper>
              <Avatar image={avatar} size={"large"} />
              <NickName>{nickname}</NickName>
            </UserWrapper>
            <Time>
              {new Date(createdAt).toLocaleDateString("ko", {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </Time>
          </LetterHeader>
          <WriteTo>To: {writedTo}</WriteTo>
          {isEditing ? (
            <EditingTextArea
              onChange={(e) => setEditingText(e.target.value)}
              defaultValue={content}
              maxLength={100}
            />
          ) : (
            <ContentText>{content}</ContentText>
          )}
        </div>
        <Buttons>
          {isEditing ? (
            <Button onClick={handleEdit} text={"수정완료"} size={"medium"} />
          ) : (
            <>
              <Button
                onClick={() => setIsEditing(true)}
                text={"수정"}
                size={"medium"}
              />
              <Button onClick={handleDelete} text={"삭제"} size={"medium"} />
            </>
          )}
        </Buttons>
      </DetailWrapper>
    </Container>
  );
}

const ToHome = styled.button`
  position: absolute;
  font-weight: 500;
  top: 30px;
  left: 30px;
  background-color: #e2a0fa;
  border: none;
  border-radius: 50%;
  box-shadow: 4px 5px 4px #9a72aad6;
  color: white;
  width: 70px;
  height: 70px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #e2a0fa;
  }
  &:active {
    transform: scale(1.03);
    transition: all 0.1s;
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 800px;
  min-height: 500px;
  border-radius: 10px;
  background-color: #c5e1db;
  color: black;
  padding: 16px;
`;

const LetterHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Time = styled.time`
  font-size: 16px;
`;

const NickName = styled.span`
  font-size: 32px;
  font-weight: 700;
`;

const WriteTo = styled.p`
  padding-top: 12px;
  font-size: 24px;
  font-weight: 500;
`;

const ContentText = styled.p`
  background-color: whitesmoke;
  color: black;
  padding: 16px;
  font-size: 24px;
  line-height: 48px;
  border-radius: 10px;
  margin: 24px 0;
  height: 275px;
`;
const EditingTextArea = styled.textarea`
  background-color: whitesmoke;
  padding: 16px;
  font-size: 24px;
  line-height: 48px;
  border: none;
  border-radius: 10px;
  margin: 24px 0;
  color: black;
  width: 100%;
  height: 275px;
`;

const Buttons = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
