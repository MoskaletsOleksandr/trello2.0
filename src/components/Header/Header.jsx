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
import { useEffect, useState } from 'react';

import sprite from '../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../redux/auth/selectors';
import { updateThemeThunk } from '../../redux/auth/thunks';

export const Header = ({ toggleSidebar }) => {
  const themes = ['light', 'dark', 'violet'];
  const theme = useSelector(selectTheme);
  const [isCustomOptionListOpen, setCustomOptionListOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.remove('light', 'dark', 'violet');
    document.body.classList.add(theme);
  }, [theme]);

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
          onClick={() => {
            toggleCustomOptionList();
          }}
        >
          Theme
          <IconDown>
            <use href={`${sprite}#icon-chevron-down`}></use>
          </IconDown>
        </TheamBtn>
        <CustomSelect>
          <CustomOptionList open={isCustomOptionListOpen}>
            {themes.map((theme) => {
              return (
                <CustomOption
                  key={theme}
                  onClick={() => handleThemeClick(theme)}
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
