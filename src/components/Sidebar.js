// Imports from react router dom
import { useHistory } from "react-router-dom";

// Import data
import db from "../firebase";
import { sidebarItems } from "../data/SidebarData";

// Imports of icons
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";

// Imports for styling
import styled from "styled-components";

const Sidebar = ({ rooms }) => {
  const history = useHistory();

  const addChannel = () => {
    const promptName = prompt("Enter channel name");
    if (promptName) {
      db.collection("rooms").add({
        name: promptName,
      });
    }
  };

  const goToChannel = (id) => {
    if (id) {
      history.push(`/room/${id}`);
    }
  };

  return (
    <Container>
      <WorkSpaceContainer>
        <Name>Luis's Slack Clone</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkSpaceContainer>
      <MainChannels>
        {sidebarItems.map((item) => (
          <MainChannelItem key={item.text}>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer onClick={addChannel}>
          <div>Channels</div>
          <AddIcon />
        </NewChannelContainer>
        <ChannelsList>
          {rooms.map((room) => (
            <Channel key={room.name} onClick={() => goToChannel(room.id)}>
              # {room.name}
            </Channel>
          ))}
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
  cursor: pointer;
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
