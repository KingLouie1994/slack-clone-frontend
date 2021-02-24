// Imports for styling
import styled from "styled-components";

const ChatMessage = () => {
  return (
    <Container>
      <UserAvatar>
        <img src="" />
      </UserAvatar>
      <MessageContent>
        <Name>Luis Schekerka</Name>
        <Text>This is the best Challenge</Text>
      </MessageContent>
    </Container>
  );
};

// Styled components
const Container = styled.div``;

const UserAvatar = styled.div``;

const MessageContent = styled.div``;

const Name = styled.span``;

const Text = styled.span``;

export default ChatMessage;
