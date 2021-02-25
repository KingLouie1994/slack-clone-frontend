// Imports from react
import React, { useContext } from "react";
import { DarkModeContext } from "../darkmode/darkModeContext";

// Imports for styling
import styled from "styled-components";

const ChatMessage = () => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <React.Fragment>
      {darkMode ? (
        <ContainerDarkMode>
          <UserAvatar>
            <img
              src="https://randomuser.me/api/portraits/women/54.jpg"
              alt="profile"
            />
          </UserAvatar>
          <MessageContent>
            <NameDarkMode>
              Amanda Curasao <span>2/25/2021 08:52:52 AM</span>
            </NameDarkMode>
            <Text>I love this clone so much!</Text>
          </MessageContent>
        </ContainerDarkMode>
      ) : (
        <Container>
          <UserAvatar>
            <img
              src="https://randomuser.me/api/portraits/women/54.jpg"
              alt="profile"
            />
          </UserAvatar>
          <MessageContent>
            <Name>
              Amanda Curasao <span>2/25/2021 08:52:52 AM</span>
            </Name>
            <Text>I love this clone so much!</Text>
          </MessageContent>
        </Container>
      )}
    </React.Fragment>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  :hover {
    background: #f6ecfb;
    transition: 0.25s;
  }
`;

const ContainerDarkMode = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  :hover {
    background: #3f3f3f;
    transition: 0.25s;
  }
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  margin: 0 8px 0 0;
  border-radius: 2px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: 900;
  font-size: 16px;
  span {
    margin: 0 0 0 8px;
    font-weight: 300;
    font-size: 12px;
    color: rgb(97, 96, 97);
  }
`;

const NameDarkMode = styled.span`
  font-weight: 900;
  font-size: 16px;
  span {
    margin: 0 0 0 8px;
    font-weight: 300;
    font-size: 12px;
    color: rgb(160, 160, 160);
  }
`;

const Text = styled.span``;

export default ChatMessage;
