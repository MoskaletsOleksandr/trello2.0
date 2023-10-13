import { useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import sprite from '../../../../assets/sprite.svg';
import { icons } from '../../../../data/constants';
import { Icon, Item, Label, List, StyledField } from './IconRadioBtns.styled';

export const IconRadioBtns = ({ name, selectedItem }) => {
  const [selectedIcon, setSelectedIcon] = useState(selectedItem || '');
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    setSelectedIcon(selectedItem || '');
  }, [selectedItem]);

  return (
    <List>
      {icons.map((icon) => {
        return (
          <Item key={icon}>
            <Label>
              <StyledField
                type="radio"
                name={name}
                value={icon}
                onChange={(e) => {
                  setSelectedIcon(e.target.value);
                  setFieldValue(name, e.target.value);
                }}
              />
              <Icon selected={selectedIcon === icon}>
                <use href={sprite + `#${icon}`}></use>
              </Icon>
            </Label>
          </Item>
        );
      })}
    </List>
  );
};
