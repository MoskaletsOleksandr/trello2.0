import sprite from '../../assets/sprite.svg';
import { LogoIcon, LogoText, LogoWrapper } from './Logo.styled';

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoIcon width="32px" height="32px">
        <use href={`${sprite}#icon-logo-lightning`} />
      </LogoIcon>
      <LogoText>Trello2.0</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
