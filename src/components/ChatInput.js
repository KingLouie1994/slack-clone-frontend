// Imports from react
import React, { useContext } from "react";
import { DarkModeContext } from "../darkmode/darkModeContext";

// Imports of icons
import SendIcon from "@material-ui/icons/Send";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

// Imports for styling
import styled from "styled-components";

const ChatInput = () => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <React.Fragment>
      {darkMode ? (
        <Container>
          <InputContainerDarkMode>
            <form>
              <input type="text" placeholder="Message here..." />
              <SendButton>
                <SendIcon />
              </SendButton>
            </form>
            <TextSettingsDarkMode>
              <SettingDarkMode>
                <FormatBoldIcon />
              </SettingDarkMode>
              <SettingDarkMode>
                <FormatUnderlinedIcon />
              </SettingDarkMode>
              <SettingDarkMode>
                <FormatItalicIcon />
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
            </TextSettingsDarkMode>
          </InputContainerDarkMode>
        </Container>
      ) : (
        <Container>
          <InputContainer>
            <form>
              <input type="text" placeholder="Message here..." />
              <SendButton>
                <SendIcon />
              </SendButton>
            </form>
            <TextSettings>
              <Setting>
                <FormatBoldIcon />
              </Setting>
              <Setting>
                <FormatUnderlinedIcon />
              </Setting>
              <Setting>
                <FormatItalicIcon />
              </Setting>
              <Setting>
                <FormatColorTextIcon />
              </Setting>
              <Setting>
                <FormatColorFillIcon />
              </Setting>
              <Setting>
                <EmojiEmotionsIcon />
              </Setting>
            </TextSettings>
          </InputContainer>
        </Container>
      )}
    </React.Fragment>
  );
};

// Styled components
const Container = styled.div`
  padding: 0 20px 24px 20px;
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

const SendButton = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background: #007a5a;
  cursor: pointer;
  .MuiSvgIcon-root {
    color: #d9d9d9;
  }
  :hover {
    background: #148567;
  }
`;

const TextSettings = styled.div`
  display: flex;
  align-items: center;
  background: #faf0d4;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const TextSettingsDarkMode = styled.div`
  display: flex;
  align-items: center;
  background: #414141;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const Setting = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 3px 10px;
  padding: 2px 2px;
  cursor: pointer;
  :hover {
    background: #ffdf88;
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

