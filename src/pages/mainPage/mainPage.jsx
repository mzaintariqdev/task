import { Divider } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import user from "../../assets/img/img-1.svg";
import { ReactComponent as Logout } from "../../assets/logo/logout.svg";
import { ReactComponent as Vector } from "../../assets/logo/Vector.svg";
import ChatButtonComp from "../../components/antDesign/chatButton";
import InputComp from "../../components/antDesign/input";
import ReceivedMessage from "../../components/chatComp/receivedMessage";
import SendMessage from "../../components/chatComp/sendMessage";
import UserComp from "../../components/userComp/userComp";
function MainPage() {
  return (
    <Wrapper>
      <SideBarWrapper>
        <UserWrapper>
          <UserImage src={user} alt="user" />
          <UserName>Mehmet Revnaki</UserName>
        </UserWrapper>
        <FriendListWrapper>
          <UserComp
            image={user}
            statement="OMW bro..."
            name="Phillip Torff"
            date="17/06/2020"
            active={true}
          />
          <UserComp
            image={user}
            statement="OMW bro..."
            name="Phillip Torff"
            date="17/06/2020"
          />
          <UserComp
            image={user}
            statement="OMW bro..."
            name="Phillip Torff"
            date="17/06/2020"
          />
          <UserComp
            image={user}
            statement="OMW bro..."
            name="Phillip Torff"
            date="17/06/2020"
          />

          <UserComp
            image={user}
            statement="OMW bro..."
            name="Phillip Torff"
            date="17/06/2020"
          />
          <UserComp
            image={user}
            statement="OMW bro..."
            name="Phillip Torff"
            date="17/06/2020"
          />
        </FriendListWrapper>

        <LogoutButton>
          <Link to="/">
            <Logout style={{ marginLeft: "25px" }} />
          </Link>
        </LogoutButton>
      </SideBarWrapper>
      <ChatWrapper>
        <UserChats>
          <ChatDate>
            <TodayDate>17/06/2020</TodayDate>
          </ChatDate>
          <ChatSent>
            <SendMessage
              name="Phillip Torff"
              message="Hello m8! "
              time="15:02"
              image={user}
            />
          </ChatSent>
          <ChatReceived>
            <ReceivedMessage
              name="Phillip Torff"
              message="Hello m8! "
              time="15:02"
              image={user}
            />
          </ChatReceived>
        </UserChats>
        <ChatInput>
          <InputComp placeholder="Type a new message..." />
          <ChatButtonComp
            style={{ width: "10%", height: "40px", background: "#C0CEF1" }}
          >
            <Flex>
              Send
              <Vector
                style={{ width: "12px", height: "12px", marginLeft: "8px" }}
              />
            </Flex>
          </ChatButtonComp>
        </ChatInput>
      </ChatWrapper>
    </Wrapper>
  );
}
const ChatSent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const ChatReceived = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
const Wrapper = styled.div`
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
  background: ${(p) => p.theme.colors.lightGray};
  display: flex;
  flex: 350px 1fr;
  flex-direction: row;
`;

const SideBarWrapper = styled.div`
  margin: 0;
  width: 350px;
  height: auto;
  min-height: 100vh;
`;
const UserWrapper = styled.div`
  margin: 0;
  width: 350px;
  min-height: 100px;
  background: ${(p) => p.theme.colors.sky};
  margin-bottom: 10px;
  border-radius: 0px 0px 14px 14px;
  display: flex;
  flex-direction: row;
`;
const FriendListWrapper = styled.div`
  margin: 0;
  width: 350px;
  height: auto;
  max-height: 85vh;
  overflow: auto;
  border-radius: 14px 14px 0px 0px;
  background: ${(p) => p.theme.colors.sky};
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 14px;
  color: #52585d;
`;
const LogoutButton = styled.div`
  width: 100%;
  min-height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(p) => p.theme.colors.sky};
  border: 1px solid #d0d9df;
`;

const ChatWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; ;
`;
const UserChats = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 90%;
`;
const ChatDate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 90%;
`;
const ChatInput = styled.div`
  height: 40px;
  width: 90%;

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
const TodayDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.colors.white};
  font-family: Poppins;
  font-size: 12px;
  width: 114px;
  height: 26px;
  background: #6588de;
  border-radius: 14px;
  margin-bottom: 30px;
`;

export default MainPage;
