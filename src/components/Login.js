// Imports from react
import React from "react";

// Imports from firebase
import { auth, provider } from "../firebase";

// Import of Project Icon
import SlackIcon from "../data/Slack.png";

// Imports for styling
import styled from "styled-components";

const Login = ({ setUser }) => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Container>
      <Content>
        <SlackImage src={SlackIcon} alt="Slack Clone" />
        <h1>Sign in Slack Clone</h1>
        <SignInButton onClick={() => signIn()}>
          Sign in with Google
        </SignInButton>
      </Content>
    </Container>
  );
};

// Styled component
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  border-radius: 5px;
  background: white;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`;

const SlackImage = styled.img`
  height: 100px;
`;

const SignInButton = styled.button`
  height: 40px;
  margin-top: 50px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  color: white;
  background: #0a8d48;
  font-size: 16px;
  cursor: pointer;
`;

export default Login;
