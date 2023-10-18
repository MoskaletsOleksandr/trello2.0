import { Grid } from 'react-loader-spinner';
import { Container, Text, Title } from './WaitingLoader.styled';

export const WitingLoader = () => {
  return (
    <Container>
      <Title>Welcome to the app Trello2.0</Title>
      <Text>
        Sometimes render.com falls asleep, wait until we wake up our backend
      </Text>
      <Grid
        height="240"
        width="240"
        color="green"
        ariaLabel="grid-loading"
        radius="12.5"
        visible={true}
      />
    </Container>
  );
};
