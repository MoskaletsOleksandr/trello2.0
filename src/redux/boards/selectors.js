export const selectAllBoards = (state) => state.boards.boards;

export const selectCurrentBoard = (state) => state.boards.currentBoard;

export const selectBoardBackgrounds = (state) =>
  state.boards.currentBoard.background;

export const selectBoardTitle = (state) => state.boards.currentBoard.title;

export const selectBackgrounds = (state) => state.boards.backgrounds;
