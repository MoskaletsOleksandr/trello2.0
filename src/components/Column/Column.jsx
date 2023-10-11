import React from 'react';
import {
  Button,
  ButtonIcon,
  ButtonsWrapper,
  CardsContainer,
  ColumnTitle,
  ColumnTitleWrapper,
  Container,
} from './Column.styled';
import sprite from '../../assets/sprite.svg';

export const Column = () => {
  return (
    <Container>
      <ColumnTitleWrapper>
        <ColumnTitle>Title</ColumnTitle>
        <ButtonsWrapper>
          <Button type="button">
            <ButtonIcon width="16px" height="16px">
              <use href={sprite + '#icon-pencil'}></use>
            </ButtonIcon>
          </Button>
          <Button type="button">
            <ButtonIcon width="16px" height="16px">
              <use href={sprite + '#icon-trash'}></use>
            </ButtonIcon>
          </Button>
        </ButtonsWrapper>
      </ColumnTitleWrapper>
      <CardsContainer></CardsContainer>
    </Container>
  );
};
