import React, { useRef, useState } from 'react';
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
import { UpdateCardModal } from '../modals/UpdateCardModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteCardByIdThunk,
  moveCardByIdThunk,
} from '../../redux/cards/thunks';
import { CustomSelect } from '../CustomSelect';
import { selectBoardColumns } from '../../redux/columns/selectors';
import { format } from 'date-fns';

export const Card = ({ card, columnTitle }) => {
  const moveCardBtnRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomOptionListOpen, setCustomOptionListOpen] = useState(false);
  const dispatch = useDispatch();
  const boardColumns = useSelector(selectBoardColumns);
  const { _id: cardId, title, text, priority, deadline } = card;
  const formatedDeadline = format(new Date(deadline), 'dd-MM-yyyy');

  const columnOptionsList = boardColumns.map((column) => column.title);
  const columnsAmount = columnOptionsList.length;
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteCard = () => {
    dispatch(deleteCardByIdThunk(cardId));
  };

  const toggleCustomOptionList = () => {
    setCustomOptionListOpen(!isCustomOptionListOpen);
  };

  const openCustomOptionList = (event) => {
    event.stopPropagation();
    toggleCustomOptionList();
  };

  const handleMoveCard = (selectedColumnTitle) => {
    if (selectedColumnTitle === columnTitle) {
      return;
    }
    const newColumnId = boardColumns.find(
      (column) => column.title === selectedColumnTitle
    )._id;
    const body = {
      newColumnId,
      newOrderInColumn: 'last',
    };
    dispatch(moveCardByIdThunk({ cardId, body }));
    toggleCustomOptionList();
  };

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
            <ItemInfo>{formatedDeadline}</ItemInfo>
          </InfoItem>
        </InfoList>
        <ButtonsWrapper>
          <Button type="button" onClick={openModal}>
            <ButtonIcon width="16px" height="16px">
              <use href={sprite + '#icon-pencil'}></use>
            </ButtonIcon>
          </Button>
          {columnsAmount > 1 && (
            <Button
              ref={moveCardBtnRef}
              type="button"
              onClick={openCustomOptionList}
            >
              <ButtonIcon width="16px" height="16px">
                <use href={sprite + '#icon-arrow-circle-broken-right'}></use>
              </ButtonIcon>
            </Button>
          )}
          <Button
            type="button"
            onClick={() => {
              handleDeleteCard();
            }}
          >
            <ButtonIcon width="16px" height="16px">
              <use href={sprite + '#icon-trash'}></use>
            </ButtonIcon>
          </Button>
          {isCustomOptionListOpen && (
            <CustomSelect
              title="Move to column"
              options={columnOptionsList}
              selectedOption={columnTitle}
              isOpen={isCustomOptionListOpen}
              onClose={toggleCustomOptionList}
              handleOptionClick={handleMoveCard}
              openBtnRef={moveCardBtnRef}
              forCard
            />
          )}
        </ButtonsWrapper>
      </CardInfo>
      {isModalOpen && <UpdateCardModal onClose={closeModal} card={card} />}
    </Container>
  );
};
