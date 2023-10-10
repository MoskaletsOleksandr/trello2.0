import { useFormikContext } from 'formik';
import React, { useState } from 'react';
import sprite from '../../../../assets/sprite.svg';
import { Icon, Item, Label, List, StyledField } from './IconRadioBtns.styled';

export const IconRadioBtns = ({ name, icons }) => {
  const [selectedIcon, setSelectedIcon] = useState('');
  const { setFieldValue } = useFormikContext();

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
