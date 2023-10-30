import styled from '@emotion/styled';

export const BtnText = styled.p`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  transition: color 300ms var(--timing-function);
`;

export const Button = styled.button`
  display: flex;
  gap: 14px;
  justify-content: left;
  align-items: center;
  margin-left: 24px;
  width: 120px;
  height: 32px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover p {
    color: var(--sidebar-logout-icon-color-hover);
  }

  &:focus p {
    color: var(--sidebar-logout-icon-color-hover);
  }

  &:hover svg {
    stroke: var(--sidebar-logout-icon-color-hover);
    transform: scale(1.15);
  }

  &:focus svg {
    stroke: var(--sidebar-logout-icon-color-hover);
    transform: scale(1.15);
  }
`;

export const Icon = styled.svg`
  width: 32px;
  height: 32px;
  stroke: var(--sidebar-logout-icon-color);

  transition: stroke 300ms var(--timing-function),
    transform 300ms var(--timing-function);
`;
