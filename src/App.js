// Imports from react router dom
import { Route, Switch } from "react-router-dom";

// Import of global style
import GlobalStyle from "./Styles/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          Login Page
        </Route>
        <Route path="/room" exact>
          Chat Page
        </Route>
      </Switch>
    </div>
  );
}

export default App;
