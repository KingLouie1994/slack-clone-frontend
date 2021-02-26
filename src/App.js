// Imports from react
import { useState, useEffect } from "react";

// Imports from react router dom
import { Route, Switch } from "react-router-dom";

// Import of db
import db from "./firebase";

// Imports from firebase
import { auth } from "./firebase";

// Imports of components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Chat from "./components/Chat";

// Imports for styling
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [rooms, setRooms] = useState();

  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem("user");
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div>
      <GlobalStyle />
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Container>
          <Header user={user} signOut={signOut} />
          <Main>
            <Sidebar rooms={rooms} />
            <Switch>
              <Route path="/room/:id">
                <Chat user={user} />
              </Route>
              <Route path="/" exact>
                Select or create Channel
              </Route>
            </Switch>
          </Main>
        </Container>
      )}
    </div>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;

export default App;
