// Imports from react
import { useState, useEffect } from "react";

// Imports from react router dom
import { Route, Switch } from "react-router-dom";

// Import DB
import db from "./firebase";

// Imports of components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Chat from "./components/Chat";

// Imports for styling
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  const [rooms, setRooms] = useState([]);

  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Container>
        <Header />
        <Main>
          <Sidebar rooms={rooms} />
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/room" exact>
              <Chat />
            </Route>
          </Switch>
        </Main>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;

export default App;
