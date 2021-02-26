// Imports from react
import React, { useContext } from "react";

// Import of contexts
import { DarkModeContext } from "../darkmode/darkModeContext";

// Imports for styling
import styled from "styled-components";

const Welcome = () => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <React.Fragment>
      {darkMode ? (
        <ContainerDarkMode>
          <p>
            Welcome to my Slack Clone - choose or create a channel to your left
          </p>
        </ContainerDarkMode>
      ) : (
        <Container>
          <p>
            Welcome to my Slack Clone - choose or create a channel to your left
          </p>
        </Container>
      )}
    </React.Fragment>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #f6ecfb, #ffffff);
  p {
    font-size: 26px;
  }
`;

const ContainerDarkMode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, rgb(54, 54, 54), #000000);
  color: white;
  p {
    font-size: 26px;
  }
`;

export default Welcome;
