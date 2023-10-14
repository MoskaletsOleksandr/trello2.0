import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  min-width: 334px;
  height: 56px;
  border-radius: 8px;
  border: none;
  background-color: var(--column-add-btn-bg-color);
  color: var(--column-add-btn-text-color);
  font-size: 14px;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: none;
  background-color: var(--column-add-btn-plus-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  text-align: center;
`;

export const Icon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--column-add-btn-plus-color);
`;
