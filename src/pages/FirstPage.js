import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  text-align: center;
  width: 660px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 0;
`;

const SubTitle = styled.p`
  color: gray;
  letter-spacing: 2px;
  margin-bottom: 30px;
  margin-top: 0;
`;

const FormContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 20px;
`;

const Dropdown = styled.div`
  margin-bottom: 25px;
`;

const Select = styled.select`
  width: 100%;
  height: 45px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #D9E3FF;
  font-size: 1rem;
  color: #767676;
`;

const Option = styled.option`
  font-size: 14px;
  background-color: rgba(217, 227, 255, 0.32);
  padding: 50px;
`;

const StartButton = styled.button`
  display: inline-block;
  padding: 10px 30px;
  font-size: 1rem;
  font-weight: lighter;
  color: white;
  background-color: #3478f6;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0px 10px 20px 0.1px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #2768e1;
  }
`;

function FirstPage() {
  return (
    <Container>
      <Title>QuizStorm!</Title>
      <SubTitle>interesting...</SubTitle>
      <FormContainer>
        <Dropdown>
          <Select name="level">
            <Option value="" disabled selected hidden>level</Option>
            <Option value="low">상</Option>
            <Option value="medium">중</Option>
            <Option value="high">하</Option>
          </Select>
        </Dropdown>
        <Dropdown>
          <Select name="category">
            <Option value="" disabled selected hidden>category</Option>
            <Option value="low">상식</Option>
            <Option value="medium">계산</Option>
            <Option value="high">윙크 퀴즈랄까나</Option>
          </Select>
        </Dropdown>
        <Dropdown>
          <Select name="number">
            <Option value="" disabled selected hidden>number</Option>
            <Option value="2개">2개 풀기</Option>
            <Option value="4개">4개 풀기</Option>
            <Option value="6개">6개 풀기</Option>
          </Select>
        </Dropdown>
        <StartButton>START</StartButton>
      </FormContainer>
    </Container>
  );
}

export default FirstPage;
