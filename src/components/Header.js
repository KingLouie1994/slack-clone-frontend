// Imports from react
import { useContext } from "react";
import { DarkModeContext } from "../darkmode/darkModeContext";

// Imports of icons
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";

// Imports for styling
import styled from "styled-components";

const Header = ({ user, signOut }) => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const switchDarkMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <Container>
      <DarkModeHandler>
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={switchDarkMode} />
        ) : (
          <NightsStayOutlinedIcon onClick={switchDarkMode} />
        )}
      </DarkModeHandler>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search..." />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>{user.name}</Name>
        <UserImage onClick={signOut}>
          <img
            src={user.photo ? user.photo : "​https://i.imgur.com/6VBx3io.png"}
            alt="Profile"
          />
        </UserImage>
      </UserContainer>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #350d36;
  color: white;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;

const DarkModeHandler = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  left: 16px;
  cursor: pointer;
`;

const Main = styled.div`
  display: flex;
  margin: 0 16px 0 16px;
`;

const SearchContainer = styled.div`
  min-width: 400px;
  margin: 0 16px 0 16px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  border-radius: 5px;

  input {
    width: 100%;
    color: white;
    background-color: transparent;
    border: none;
    padding: 4px 8px 4px 8px;
  }

  input:focus {
    outline: none;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px 0 0;
  position: absolute;
  right: 0;
`;

const Name = styled.div`
  padding: 0 16px 0 0;
`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 3px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

export default Header;
