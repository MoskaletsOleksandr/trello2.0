import PropTypes from 'prop-types';
import { Icon, IconContainer, StyledButton } from './Button.styled';
import sprite from '../../../assets/sprite.svg';

export const Button = ({ children, onClick, type }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      <IconContainer>
        <Icon width="28px" height="28px">
          <use href={sprite + '#icon-plus'}></use>
        </Icon>
      </IconContainer>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
