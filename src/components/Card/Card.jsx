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
} from './Card.styled';

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
      </CardInfo>
    </Container>
  );
};
