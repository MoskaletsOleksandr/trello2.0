import React from 'react';
import { useSelector } from 'react-redux';
import { selectBoardBackgrounds } from '../../redux/boards/selectors';
import { Container } from './MainDashboard.styled';

export const MainDashDoard = () => {
  const boardBackgrounds = useSelector(selectBoardBackgrounds);

  return <Container background={boardBackgrounds}></Container>;
};
