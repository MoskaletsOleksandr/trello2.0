import styled from '@emotion/styled';
import { Field } from 'formik';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 252px;
`;

export const Item = styled.li`
  display: block;
  width: 28px;
  height: 28px;
`;

export const Label = styled.label``;

export const StyledField = styled(Field)`
  display: none;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  outline: ${({ selected }) =>
    selected ? '2px solid var(--modal-selected-icon-color)' : 'none'};
  border-radius: 8px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 28px;
  height: 28px;
`;

export const BasicBackground = styled.svg`
  stroke: var(--modal-icon-color);
  fill: transparent;
`;
