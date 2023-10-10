import { useFormikContext } from 'formik';
import sprite from '../../../../assets/sprite.svg';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBackgrounds } from '../../../../redux/boards/selectors';
import {
  BasicBackground,
  Img,
  ImgWrapper,
  Item,
  Label,
  List,
  StyledField,
} from './BgRadioBtns.styled';

export const BgRadioBtns = ({ name, selectedItem }) => {
  const [selectedBg, setSelectedBg] = useState(selectedItem || '');
  const backgrounds = useSelector(selectBackgrounds);
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    setSelectedBg(selectedItem || '');
  }, [selectedItem]);

  return (
    <List>
      <Item>
        <Label>
          <StyledField
            type="radio"
            name={name}
            value={'null'}
            onChange={(e) => {
              setSelectedBg(e.target.value);
              setFieldValue(name, e.target.value);
            }}
          />
          <ImgWrapper selected={selectedBg === 'null'}>
            <BasicBackground style={{ width: '16px', height: '16px' }}>
              <use href={sprite + '#null-background'}></use>
            </BasicBackground>
          </ImgWrapper>
        </Label>
      </Item>
      {backgrounds.map((background) => {
        return (
          <Item key={background._id}>
            <Label>
              <StyledField
                type="radio"
                name={name}
                value={background._id}
                onChange={(e) => {
                  setSelectedBg(e.target.value);
                  setFieldValue(name, e.target.value);
                }}
              />
              <ImgWrapper selected={selectedBg === background._id}>
                <Img src={background.previewURL} />
              </ImgWrapper>
            </Label>
          </Item>
        );
      })}
    </List>
  );
};
