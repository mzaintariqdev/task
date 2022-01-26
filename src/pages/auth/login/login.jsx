import React from "react";
import styled from "styled-components";
import ButtonComp from "../../../components/antDesign/button";
import InputComp from "../../../components/antDesign/input";
import { ReactComponent as Vector } from "../../../assets/logo/Vector.svg";
import { Link } from "react-router-dom";
function Login() {
  return (
    <Wrapper>
      <WrapperHeader>
        <Header>Gain Impact Chat</Header>
      </WrapperHeader>
      <WrapperForm>
        <FormHeader style={{ marginBottom: "29px" }}>Sign In</FormHeader>
        <InputDiv>
          <InputComp placeholder="Enter your username" />
        </InputDiv>
        <InputDiv>
          <InputComp placeholder="Enter your password" />
        </InputDiv>
        <Link to="/signup">
          <ButtonComp style={{ width: "630px", height: "40px" }}>
            <Flex>
              Submit
              <Vector
                style={{ width: "12px", height: "12px", marginLeft: "8px" }}
              />
            </Flex>
          </ButtonComp>
        </Link>
      </WrapperForm>
    </Wrapper>
  );
}

export default Login;
const Wrapper = styled.div`
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
`;
const WrapperHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(p) => p.theme.colors.sky};
  height: 168px;
  max-height: 168px;
`;
const Header = styled.h3`
  font-family: ${(p) => p.theme.font.family};
  font-weight: ${(p) => p.theme.font.weight.semiBold};
  font-size: 50px;
  color: ${(p) => p.theme.colors.lightBlack};
`;

const WrapperForm = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormHeader = styled.h3`
  font-family: ${(p) => p.theme.font.family};
  font-weight: ${(p) => p.theme.font.weight.semiBold};
  font-size: 36px;
  color: ${(p) => p.theme.colors.lightBlack};
`;
const InputDiv = styled.div`
  width: 630px;
  height: 40px;
  margin-bottom: 29px;
  border: 1px solid rgba(150, 169, 186, 0.7);
  border-radius: 14px;
  display: flex;
  justify-content: flex-start;
  color: ${(p) => p.theme.colors.gray};
  background: ${(p) => p.theme.colors.white};
`;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
