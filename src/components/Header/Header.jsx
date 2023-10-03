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
import { useState } from 'react';

import sprite from '../../assets/sprite.svg';

const themes = ['Light', 'Dark', 'Violet'];

export const Header = () => {
  const [isCustomOptionListOpen, setCustomOptionListOpen] = useState(false);
  const toggleCustomOptionList = () => {
    setCustomOptionListOpen(!isCustomOptionListOpen);
  };

  const handleThemeClick = (selectedTheme) => {
    dispatch(UpdateThemeThunk({ theme: selectedTheme }));
  };

  return (
    <HeaderContainer>
      <ButtonMenu
        onClick={() => {
          console.log('Click ButtonMenu');
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
            console.log('Click TheamBtn');
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
