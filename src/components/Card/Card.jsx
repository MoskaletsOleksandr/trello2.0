import React from 'react';
import {
  CardInfo,
  InfoList,
  CardText,
  CardTextContainer,
  CardTitle,
  Container,
  InfoItem,
  ItemTitle,
  PriorityWrapper,
  PriorityCircle,
  ItemInfo,
  ButtonsWrapper,
  Button,
  ButtonIcon,
} from './Card.styled';
import sprite from '../../assets/sprite.svg';

export const Card = ({ card }) => {
  const { _id, title, text, priority, deadline, order } = card;
  return (
    <Container priority={priority}>
      <CardTitle>{title}</CardTitle>
      <CardTextContainer>
        <CardText>{text}</CardText>
      </CardTextContainer>
      <CardInfo>
        <InfoList>
          <InfoItem>
            <ItemTitle>Priority:</ItemTitle>
            <PriorityWrapper>
              <PriorityCircle priority={priority} />
              <ItemInfo>{priority}</ItemInfo>
            </PriorityWrapper>
          </InfoItem>
          <InfoItem>
            <ItemTitle>Deadline:</ItemTitle>
            <ItemInfo>{deadline}</ItemInfo>
          </InfoItem>
        </InfoList>
        <ButtonsWrapper>
          <Button
            type="button"
            // onClick={openModal}
          >
            <ButtonIcon width="16px" height="16px">
              <use href={sprite + '#icon-pencil'}></use>
            </ButtonIcon>
          </Button>
          {/* {columnsAmount > 1 && ( */}
          <Button
            // ref={moveColumnBtnRef}
            type="button"
            // onClick={openCustomOptionList}
          >
            <ButtonIcon width="16px" height="16px">
              <use href={sprite + '#icon-arrow-circle-broken-right'}></use>
            </ButtonIcon>
          </Button>
          {/* )} */}
          <Button
            type="button"
            // onClick={() => {
            //   handleDeleteColumn();
            // }}
          >
            <ButtonIcon width="16px" height="16px">
              <use href={sprite + '#icon-trash'}></use>
            </ButtonIcon>
          </Button>
        </ButtonsWrapper>
      </CardInfo>
    </Container>
  );
};
