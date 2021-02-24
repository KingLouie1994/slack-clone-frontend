// Imports of icons
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

// Imports for styling
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
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
        <Name>Luis Schekerka</Name>
        <UserImage>
          <img src="https://i.imgur.com/6VBx3io.png" alt="Profile" />
        </UserImage>
      </UserContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #350d36;
  color: white;
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

  img {
    width: 100%;
  }
`;

export default Header;
