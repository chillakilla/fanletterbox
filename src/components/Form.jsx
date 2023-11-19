import react, { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import Button from "./common/Button";
import { useLetterContext } from "../context/LetterContext";

export default function Form() {
  const { letters, setLetters, member, setMember } = useLetterContext();
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [fileObj, setFileObj] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!nickname || !content) {
      return alert("닉네임과 내용은 필수로 입력해주세요.");
    }
    const newLetter = {
      id: uuid(),
      nickname,
      content,
      avatar: fileObj,
      writedTo: member,
      createdAt: new Date(),
    };
    console.log(newLetter);
    console.log([...letters, newLetter]);
    setLetters([...letters, newLetter]);
    setNickname("");
    setContent("");
  };
  const selectMember = (event) => {
    setMember(event.target.value);
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <InputSection>
        <Label>닉네임 :&nbsp;</Label>
        <NicknameInput
          value={nickname}
          placeholder="최대 20글자까지 작성할 수 있습니다."
          maxLength={20}
          onChange={(event) => setNickname(event.target.value)}
        />
      </InputSection>
      <InputSection>
        <Label> 내용 :&nbsp;</Label>
        <TextArea
          value={content}
          placeholder="최대 100자까지만 작성할 수 있습니다."
          maxLength={100}
          onChange={(event) => setContent(event.target.value)}
        />
      </InputSection>
      <InputSection>
        <Label style={{ width: 190 }}>누구에게 보내실 겁니까?</Label>
        <select onChange={selectMember}>
          <option value={"카리나"}>카리나</option>
          <option value={"윈터"}>윈터</option>
          <option value={"닝닝"}>닝닝</option>
          <option value={"지젤"}>지젤</option>
        </select>
      </InputSection>
      <Button text={"등록"} />
    </FormContainer>
  );
}

const FormContainer = styled.form`
  transform: translateX(16%);
  width: 500px;
  background-color: #e6f4f1;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
`;

const InputSection = styled.section`
  margin-bottom: 10px;
  display: flex;
`;

const Label = styled.label`
  width: 100px;
  display: flex;
  align-items: center;
`;

const NicknameInput = styled.input`
  width: 100%;
  padding: 5px 10px;
`;

const TextArea = styled.textarea`
  resize: none;
  height: 80px;
  width: 100%;
  padding: 5px 10px;
`;
