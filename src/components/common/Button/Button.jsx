import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  onClick: PropTypes.func,
};
