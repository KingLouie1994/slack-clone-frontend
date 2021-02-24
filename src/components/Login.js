// Imports from react
import React, { useContext } from "react";
import { DarkModeContext } from "../darkmode/darkModeContext";

// Imports for styling
import styled from "styled-components";

const Login = () => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <React.Fragment>
      {darkMode ? (
        <ContainerDarkMode>
          <h1>Login</h1>
          <p>Click <a href="/room">here</a> to go to rooms and checkout homework</p>
        </ContainerDarkMode>
      ) : (
        <Container>
          <h1>Login</h1>
          <p>Click <a href="/room">here</a> to go to rooms and checkout homework</p>
        </Container>
      )}
    </React.Fragment>
  );
};

// Styled component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    color: orange;
  }
`;

const ContainerDarkMode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(31, 31, 31);
  color: white;
  a {
    color: orange;
  }
`;

export default Login;
