// Import data
import { sidebarItems } from "../data/SidebarData";

// Imports of icons
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";

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
      <MainChannels>
        {sidebarItems.map((item) => (
          <MainChannelItem>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon />
        </NewChannelContainer>
        <ChannelsList>
          <Channel># Channel 1</Channel>
          <Channel># Channel 2</Channel>
        </ChannelsList>
      </ChannelsContainer>
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

const MainChannels = styled.div``;

const MainChannelItem = styled.div`
  height: 28px;
  display: grid;
  grid-template-columns: 15% auto;
  align-items: center;
  padding: 0 0 0 19px;
  cursor: pointer;
  color: rgb(188, 171, 188);
  :hover {
    background: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  margin: 10px 0 0 0;
  color: rgb(188, 171, 188);
`;

const NewChannelContainer = styled.div`
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px 0 19px;
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding: 0 0 0 19px;
  cursor: pointer;

  :hover {
    background: #350d36;
  }
`;

export default Sidebar;
