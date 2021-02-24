// Imports of icons
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

// Imports for styling
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Container>
      <WorkSpaceContainer>
        <Name>Clever Programmer</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkSpaceContainer>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  background: #3f0e40;
`;

const WorkSpaceContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #532753;
  padding: 0 19px 0 19px;
  color: white;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  border-radius: 50%50%;
`;

export default Sidebar;
