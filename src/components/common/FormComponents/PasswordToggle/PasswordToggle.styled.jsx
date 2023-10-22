import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
  caret-color: var(--auth-input-text-color);
`;

export const EyeIcon = styled.svg`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  fill: var(--auth-input-border-color);
`;
