import React, { useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import LetterList from "components/LetterList";
import Form from "../components/Form";
import styled from "styled-components";
import { setMember } from "../redux/modules/memberAction";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const member = useSelector((state) => state.member);

  useEffect(() => {
    dispatch(setMember(member));
  }, [dispatch, member]);

  const navigateDetails = (selectedMember) => {
    dispatch(setMember(selectedMember));
  };

  return (
    <Container>
      <Header member={member} setMember={navigateDetails} />
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
