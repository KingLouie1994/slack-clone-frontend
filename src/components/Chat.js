// Imports of icons
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

// Imports for styling
import styled from "styled-components";

const Chat = () => {
  return (
    <Container>
      <Header>
        <TextPart>
          <Title>
            <h3># Welcome</h3>
            <StarBorderIcon />
          </Title>
          <Description>
            <p>Welcome messages for new members of our slack channel</p>
          </Description>
        </TextPart>
        <DetailsPart>
          <h3>Details</h3>
          <InfoOutlinedIcon />
        </DetailsPart>
      </Header>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 76px;
  display: flex;
  justify-content: space-between;
  padding: 5px 0 5px 10px;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const TextPart = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin: 0 5px 0 0;
  }
`;

const Description = styled.div`
  color: rgb(97, 97, 97);
`;

const DetailsPart = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: rgb(97, 97, 97);
  margin: 0 10px 0 0;
  h3 {
    margin: 0 5px 0 0;
  }
`;

export default Chat;
