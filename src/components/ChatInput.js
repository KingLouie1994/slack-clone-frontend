// Imports from react
import React, { useState, useContext } from "react";
import { DarkModeContext } from "../darkmode/darkModeContext";

// Imports of icons
import SendIcon from "@material-ui/icons/Send";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

// Imports for styling
import styled from "styled-components";

const ChatInput = ({ sendMessage }) => {
  const [darkMode] = useContext(DarkModeContext);

  const [input, setInput] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (!input) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <React.Fragment>
      {darkMode ? (
        <Container>
          <InputContainerDarkMode>
            <form>
              <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                value={input}
                placeholder="Message here..."
              />
              <SendButton type="submit" onClick={send}>
                <SendIcon />
              </SendButton>
            </form>
            <TextSettingsDarkMode>
              <LeftSettings>
                <SettingDarkMode>
                  <FormatBoldIcon />
                </SettingDarkMode>
                <SettingDarkMode>
                  <FormatUnderlinedIcon />
                </SettingDarkMode>
                <SettingDarkMode>
                  <FormatItalicIcon />
                </SettingDarkMode>
              </LeftSettings>
              <RightSettings>
                <SettingDarkMode>
                  <TextFieldsIcon />
                </SettingDarkMode>
                <SettingDarkMode>
                  <FormatColorTextIcon />
                </SettingDarkMode>
                <SettingDarkMode>
                  <FormatColorFillIcon />
                </SettingDarkMode>
                <SettingDarkMode>
                  <EmojiEmotionsIcon />
                </SettingDarkMode>
              </RightSettings>
            </TextSettingsDarkMode>
          </InputContainerDarkMode>
        </Container>
      ) : (
        <Container>
          <InputContainer>
            <form>
              <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                value={input}
                placeholder="Message here..."
              />
              <SendButton type="submit" onClick={send}>
                <SendIcon />
              </SendButton>
            </form>
            <TextSettings>
              <LeftSettings>
                <LeftSetting>
                  <FormatBoldIcon />
                </LeftSetting>
                <LeftSetting>
                  <FormatUnderlinedIcon />
                </LeftSetting>
                <LeftSetting>
                  <FormatItalicIcon />
                </LeftSetting>
              </LeftSettings>
              <RightSettings>
                <RightSetting>
                  <TextFieldsIcon />
                </RightSetting>
                <RightSetting>
                  <FormatColorTextIcon />
                </RightSetting>
                <RightSetting>
                  <FormatColorFillIcon />
                </RightSetting>
                <RightSetting>
                  <EmojiEmotionsIcon />
                </RightSetting>
              </RightSettings>
            </TextSettings>
          </InputContainer>
        </Container>
      )}
    </React.Fragment>
  );
};

// Styled components
const Container = styled.div`
  padding: 24px 20px 24px 20px;
`;

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 5px;
  form {
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 10px;
    input {
      flex: 1;
      background: transparent;

      border: none;
      font-size: 12px;
    }
    input:focus {
      outline: none;
    }
  }
`;

const InputContainerDarkMode = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 5px;
  form {
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 10px;
    input {
      flex: 1;
      background: transparent;
      border: none;
      font-size: 12px;
      color: white;
    }
    input:focus {
      outline: none;
    }
  }
`;

const SendButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background: #350d36;
  cursor: pointer;
  .MuiSvgIcon-root {
    color: white;
  }
  :hover {
    background: #773697;
  }
`;

const TextSettings = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #ffffff, #f6ecfb);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const TextSettingsDarkMode = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #414141;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const LeftSettings = styled.div`
  display: flex;
`;

const RightSettings = styled.div`
  display: flex;
`;

const LeftSetting = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 3px 10px;
  padding: 2px 2px;
  cursor: pointer;
  :hover {
    background: #f6ecfb;
    border-radius: 5px;
  }
`;

const RightSetting = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 3px 10px;
  padding: 2px 2px;
  cursor: pointer;
  :hover {
    background: white;
    border-radius: 5px;
  }
`;

const SettingDarkMode = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 3px 10px;
  padding: 2px 2px;
  cursor: pointer;
  :hover {
    background: #6b6b6b;
    border-radius: 5px;
  }
`;

export default ChatInput;
