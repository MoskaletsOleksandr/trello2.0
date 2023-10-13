import styled from '@emotion/styled';
import { Field } from 'formik';

export const List = styled.ul`
  display: flex;
  gap: 8px;
`;

export const Item = styled.li`
  display: block;
  width: 18px;
  height: 18px;
`;

export const Label = styled.label``;

export const StyledField = styled(Field)`
  display: none;
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${({ selected }) =>
    selected ? 'var(--modal-selected-icon-color)' : 'var(--modal-icon-color)'};
  fill: transparent;
  cursor: pointer;
`;

export const PriorityCircle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ priority }) =>
    `var(--filter-${priority}-priority-color)`};
  border: ${({ selected }) =>
    selected ? '2px solid var(--modal-bg-color)' : 'none'};
  outline: ${({ selected, priority }) =>
    selected ? `2px solid var(--filter-${priority}-priority-color)` : 'none'};
`;
