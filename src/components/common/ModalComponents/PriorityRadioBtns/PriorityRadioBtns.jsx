import { useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import { priorities } from '../../../../data/constants';
import {
  Icon,
  Item,
  Label,
  List,
  PriorityCircle,
  StyledField,
} from './PriorityRadioBtns.styled';

export const PriorityRadioBtns = ({ name, icons, selectedItem }) => {
  const [selectedPriority, setSelectedPriority] = useState(selectedItem || '');
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    setSelectedPriority(selectedItem || '');
  }, [selectedItem]);

  return (
    <List>
      {priorities.map((priority) => {
        return (
          <Item key={priority}>
            <Label>
              <StyledField
                type="radio"
                name={name}
                value={priority}
                onChange={(e) => {
                  setSelectedPriority(e.target.value);
                  setFieldValue(name, e.target.value);
                }}
              />
              <PriorityCircle
                priority={priority}
                selected={selectedPriority === priority}
              />
            </Label>
          </Item>
        );
      })}
    </List>
  );
};
