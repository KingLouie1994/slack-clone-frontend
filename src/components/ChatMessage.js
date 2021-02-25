// Imports from react
import React, { useContext } from "react";
import { DarkModeContext } from "../darkmode/darkModeContext";

// Imports for styling
import styled from "styled-components";

const ChatMessage = ({ text, name, image, timestamp }) => {
  const [darkMode] = useContext(DarkModeContext);
  return (
    <React.Fragment>
      {darkMode ? (
        <ContainerDarkMode>
          <UserAvatar>
            {image ? <img src={image} alt="profile" /> : null}
          </UserAvatar>
          <MessageContent>
            <NameDarkMode>
              {name ? <p>{name}</p> : null}
              {timestamp && (
                <span>{new Date(timestamp.toDate()).toUTCString()}</span>
              )}
            </NameDarkMode>
            {text ? <Text>{text}</Text> : null}
          </MessageContent>
        </ContainerDarkMode>
      ) : (
        <Container>
          <UserAvatar>
            {image ? <img src={image} alt="profile" /> : null}
          </UserAvatar>
          <MessageContent>
            <Name>
              {name ? <p>{name}</p> : null}
              {timestamp && (
                <span>{new Date(timestamp.toDate()).toUTCString()}</span>
              )}
            </Name>
            {text ? <Text>{text}</Text> : null}
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
  display: flex;
  align-items: center;
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
  display: flex;
  align-items: center;
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
