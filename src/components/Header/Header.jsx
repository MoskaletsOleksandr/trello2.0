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
import { CustomSelect } from '../CustomSelect';
import { themes } from '../../data/constants';

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
        <TheamBtn
          ref={theamBtnRef}
          onClick={(event) => {
            event.stopPropagation();
            toggleCustomOptionList();
          }}
        >
          Theme
          <IconDown>
            <use href={`${sprite}#icon-chevron-down`}></use>
          </IconDown>
        </TheamBtn>
        {isCustomOptionListOpen && (
          <CustomSelect
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
