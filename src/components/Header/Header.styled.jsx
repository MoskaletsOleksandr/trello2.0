import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  flex-grow: 1;
  height: 60px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 20px;
  color: var(--header-theme-select-text-color);
  background-color: var(--header-bg-color);

  @media screen and (min-width: 768px) {
    height: 68px;
    padding: 18px 32px;
  }
`;

export const ButtonMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const IconMenu = styled.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: var(--header-name-color);
`;

export const HeaderInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const TheamBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const IconDown = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--header-theme-select-text-color);
`;
