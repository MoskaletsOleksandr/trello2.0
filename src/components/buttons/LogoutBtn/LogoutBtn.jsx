import sprite from '../../../assets/sprite.svg';
import { Button, Icon, BtnText } from './LogoutBtn.styled';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../../redux/auth/thunks';

export const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <Button onClick={handleLogout}>
      <BtnText>Log out</BtnText>
      <Icon width="32px" height="32px">
        <use href={`${sprite}#icon-login`} />
      </Icon>
    </Button>
  );
};
