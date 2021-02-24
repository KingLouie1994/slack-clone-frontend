// Imports from react router dom
import { Route, Switch } from "react-router-dom";

// Imports of components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Chat from "./components/Chat";

// Imports for styling
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Header />
        <Main>
          <Sidebar />
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
  background-color: blue;
`;

export default App;
