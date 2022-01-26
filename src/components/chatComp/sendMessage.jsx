import React from "react";
import styled from "styled-components";

function SendMessage(props) {
  return (
    <Wrapper>
      <Flex style={{ flexDirection: "column", alignItems: "end" }}>
        <UserName>{props.name}</UserName>
        <Flex style={{ flexDirection: "row" }}>
          <UserMessage>
            {props.message}
            <Flex>
              <Time>{props.time}</Time>
            </Flex>
          </UserMessage>
          <UserImage src={props.image} />
        </Flex>
      </Flex>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  align-items: left;
  margin-bottom: 40px;
`;
const Flex = styled.div`
  display: flex;
`;
const UserName = styled.div`
  font-family: Poppins;

  font-weight: 600;
  font-size: 12px;

  color: #52585d;
`;
const UserImage = styled.img`
  margin-left: 10px;
  width: 44px;
  height: 44px;
`;
const UserMessage = styled.div`
  color: #fdfdfe;
  font-size: 12px;
  font-weight: 400;
  min-width: 134px;
  min-height: 66px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f3ba4a;
  border-radius: 14px 0px 14px 14px;
`;
const Time = styled.div`
  font-size: 10px;

  color: #fdfdfe;

  opacity: 0.6;
`;
export default SendMessage;
