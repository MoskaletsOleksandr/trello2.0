import {
  ButtonMenu,
  CustomOption,
  CustomOptionList,
  CustomSelect,
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

export const Header = ({ toggleSidebar }) => {
  const themes = ['light', 'dark', 'violet'];
  const appTheme = useSelector(selectTheme);
  const [isCustomOptionListOpen, setCustomOptionListOpen] = useState(false);
  const customOptionListRef = useRef(null);
  const theamBtnRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.remove('light', 'dark', 'violet');
    document.body.classList.add(appTheme);
  }, [appTheme]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isCustomOptionListOpen &&
        customOptionListRef.current &&
        !customOptionListRef.current.contains(event.target) &&
        theamBtnRef.current !== event.target
      ) {
        toggleCustomOptionList();
      }
    };

    if (isCustomOptionListOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isCustomOptionListOpen]);

  const toggleCustomOptionList = () => {
    setCustomOptionListOpen(!isCustomOptionListOpen);
  };

  const handleThemeClick = (selectedTheme) => {
    dispatch(updateThemeThunk({ theme: selectedTheme }));
    toggleCustomOptionList();
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
          onClick={() => {
            toggleCustomOptionList();
          }}
        >
          Theme
          <IconDown>
            <use href={`${sprite}#icon-chevron-down`}></use>
          </IconDown>
        </TheamBtn>
        <CustomSelect ref={customOptionListRef}>
          <CustomOptionList open={isCustomOptionListOpen}>
            {themes.map((theme) => {
              return (
                <CustomOption
                  key={theme}
                  onClick={() => handleThemeClick(theme)}
                  selected={appTheme === theme}
                >
                  {theme}
                </CustomOption>
              );
            })}
          </CustomOptionList>
        </CustomSelect>
      </HeaderInfo>
    </HeaderContainer>
  );
};
