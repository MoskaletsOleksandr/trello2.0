import { Grid } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <Grid
        height="140"
        width="140"
        color="var(--modal-btn-bg-color-hover)"
        ariaLabel="grid-loading"
        radius="12.5"
        visible={true}
      />
    </Container>
  );
};
