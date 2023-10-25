import {
  ButtonMenu,
  HeaderContainer,
  HeaderInfo,
  IconDown,
  IconMenu,
  TheamBtn,
} from './Header.styled';
import { useEffect, useRef, useState } from 'react';

import sprite from '../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../redux/auth/selectors';
import { updateThemeThunk } from '../../redux/auth/thunks';
import { CustomSelect } from '../common/CustomSelect';
import { themes } from '../../data/constants';
import { UserInfo } from '../UserInfo';

export const Header = ({ toggleSidebar }) => {
  const appTheme = useSelector(selectTheme);
  const [isCustomOptionListOpen, setCustomOptionListOpen] = useState(false);
  const theamBtnRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.remove('light', 'dark', 'violet');
    document.body.classList.add(appTheme);
  }, [appTheme]);

  const toggleCustomOptionList = () => {
    setCustomOptionListOpen(!isCustomOptionListOpen);
  };

  const openCustomOptionList = (event) => {
    event.stopPropagation();
    toggleCustomOptionList();
  };

  const handleChangeTheme = (selectedTheme) => {
    if (selectedTheme !== appTheme) {
      dispatch(updateThemeThunk({ theme: selectedTheme }));
      toggleCustomOptionList();
    }
  };

  return (
    <HeaderContainer>
      <ButtonMenu
        onClick={() => {
          toggleSidebar();
        }}
      >
        <IconMenu>
          <use href={`${sprite}#icon-menu`}></use>
        </IconMenu>
      </ButtonMenu>
      <HeaderInfo>
        <TheamBtn ref={theamBtnRef} onClick={openCustomOptionList}>
          Theme
          <IconDown>
            <use href={`${sprite}#icon-chevron-down`}></use>
          </IconDown>
        </TheamBtn>
        <UserInfo />
        {isCustomOptionListOpen && (
          <CustomSelect
            title="Select theme"
            options={themes}
            selectedOption={appTheme}
            isOpen={isCustomOptionListOpen}
            onClose={toggleCustomOptionList}
            handleOptionClick={handleChangeTheme}
            openBtnRef={theamBtnRef}
          />
        )}
      </HeaderInfo>
    </HeaderContainer>
  );
};
