// Imports from react
import React, { useContext } from "react";
import { DarkModeContext } from "../darkmode/darkModeContext";

// Imports of icons
import SendIcon from "@material-ui/icons/Send";

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

export default ChatInput;
