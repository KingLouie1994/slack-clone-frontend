// Imports from react
import React, { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "../darkmode/darkModeContext";

// Imports from react router dom
import { useParams } from "react-router-dom";

// Imports of components
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

// Import of db
import db from "../firebase";

// Imports of icons
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

// Imports for styling
import styled from "styled-components";

const Chat = () => {
  const [darkMode] = useContext(DarkModeContext);

  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState();

  let { id } = useParams();

  const getChannel = () => {
    db.collection("rooms")
      .doc(id)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
      });
  };

  const getMessages = () => {
    db.collection("rooms")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        setMessages(messages);
      });
  };

  useEffect(() => {
    getChannel();
    getMessages();
    console.log(messages);
  }, [id]);

  return (
    <React.Fragment>
      {darkMode ? (
        <ContainerDarkMode>
          <HeaderDarkMode>
            <Channel>
              <ChannelName>
                {channel ? <h3># {channel.name}</h3> : null}
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
            {messages &&
              messages.length > 0 &&
              messages.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  text={msg.text}
                  name={msg.user}
                  image={msg.userImage}
                  timestamp={msg.timestamp}
                />
              ))}
          </MessageContainer>
          <ChatInput></ChatInput>
        </ContainerDarkMode>
      ) : (
        <Container>
          <Header>
            <Channel>
              <ChannelName>
                {channel ? <h3># {channel.name}</h3> : null}
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
            {messages &&
              messages.length > 0 &&
              messages.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  text={msg.text}
                  name={msg.user}
                  image={msg.userImage}
                  timestamp={msg.timestamp}
                />
              ))}
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
