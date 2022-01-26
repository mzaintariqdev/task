import React from "react";
import styled from "styled-components";

function UserComp(props) {
  return (
    <Wrapper active={props.active}>
      <Flex style={{ flexDirection: "row", marginBottom: "25px" }}>
        <UserImage src={props.image} />
        <Flex>
          <UserName active={props.active}>{props.name}</UserName>
          <LastTalk active={props.active}>{props.statement}</LastTalk>
        </Flex>
      </Flex>

      <LastDate active={props.active}>{props.date}</LastDate>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
  width: 318px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${(p) =>
    p.active === true
      ? `  background: #6588de;
    box-shadow: 0px 8px 40px rgba(0, 72, 251, 0.3);
    border-radius: 14px;`
      : ""}
`;
const UserImage = styled.img`
  width: 44px;
  height: 44px;
  margin-left: 35px;
  margin-top: 30px;
  border-radius: 25px;
  border: 2px solid #f3ba4a;
`;
const UserName = styled.h3`
  margin: 0;
  margin-left: 15px;
  margin-top: 29px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;

  ${(p) => (p.active === true ? `  color: #fdfdfe` : `color: #52585d`)}
`;
const LastTalk = styled.h3`
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;

  ${(p) => (p.active === true ? `    color: #f2f6f7` : `color: #96a9ba`)}
`;
const LastDate = styled.h3`
  margin: 0;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;

  text-align: right;
  margin-right: 8px;

  ${(p) => (p.active === true ? `   color: #fdfdfe` : `color: #96a9ba`)}
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default UserComp;
