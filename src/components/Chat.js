// Imports from react
import React, { useContext } from "react";
import { DarkModeContext } from "../darkmode/darkModeContext";

// Imports of components
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

// Imports of icons
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

// Imports for styling
import styled from "styled-components";

const Chat = () => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <React.Fragment>
      {darkMode ? (
        <ContainerDarkMode>
          <HeaderDarkMode>
            <Channel>
              <ChannelName>
                <h3># Welcome</h3>
                <StarBorderIcon />
              </ChannelName>
              <ChannelInfoDarkMode>
                <p>Welcome messages from new members of our slack channel</p>
              </ChannelInfoDarkMode>
            </Channel>
            <ChannelDetailsDarkMode>
              <h3>Details</h3>
              <InfoOutlinedIcon />
            </ChannelDetailsDarkMode>
          </HeaderDarkMode>
          <MessageContainer>
            <ChatMessage />
          </MessageContainer>
          <ChatInput></ChatInput>
        </ContainerDarkMode>
      ) : (
        <Container>
          <Header>
            <Channel>
              <ChannelName>
                <h3># Welcome</h3>
                <StarBorderIcon />
              </ChannelName>
              <ChannelInfo>
                <p>Welcome messages from new members of our slack channel</p>
              </ChannelInfo>
            </Channel>
            <ChannelDetails>
              <h3>Details</h3>
              <InfoOutlinedIcon />
            </ChannelDetails>
          </Header>
          <MessageContainer>
            <ChatMessage />
          </MessageContainer>
          <ChatInput />
        </Container>
      )}
    </React.Fragment>
  );
};

// Styled components
const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
  background: linear-gradient(to right, #f6ecfb, #ffffff);
`;

const ContainerDarkMode = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
  background: linear-gradient(to right, rgb(54, 54, 54), #000000);
  color: white;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const HeaderDarkMode = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  border-bottom: 1px solid rgb(87, 87, 87);
`;

const Channel = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ChannelName = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin: 0 5px 0 0;
  }
`;

const ChannelInfo = styled.div`
  color: #606060;
`;

const ChannelInfoDarkMode = styled.div`
  color: rgb(160, 160, 160);
`;

const ChannelDetails = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: #606060;
  cursor: pointer;
  h3 {
    margin: 0 5px 0 0;
  }
`;

const ChannelDetailsDarkMode = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: rgb(160, 160, 160);
  cursor: pointer;
  h3 {
    margin: 0 5px 0 0;
  }
`;

const MessageContainer = styled.div``;

export default Chat;
