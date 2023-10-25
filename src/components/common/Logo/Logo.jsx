import sprite from '../../../assets/sprite.svg';
import { IconContainer, LogoContainer, LogoIcon, Title } from './Logo.styled';

const Logo = ({ large }) => {
  return (
    <LogoContainer large={large}>
      <IconContainer large={large}>
        <LogoIcon large={large}>
          <use href={sprite + '#icon-trello'}></use>
        </LogoIcon>
      </IconContainer>
      <Title large={large}>Trello2.0</Title>
    </LogoContainer>
  );
};

export default Logo;
