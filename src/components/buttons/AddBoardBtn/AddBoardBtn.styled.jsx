import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 40px;
  padding: 14px 4px 14px 0;
  border-top: 1px solid var(--sidebar-button-plus-border-color);
  border-bottom: 1px solid var(--sidebar-button-plus-border-color);

  @media screen and (min-width: 768px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export const Text = styled.p`
  width: 86px;
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 36px;
  background-color: var(--sidebar-button-plus-bg-color);
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 300ms var(--timing-function),
    transform 300ms var(--timing-function);

  &:hover,
  &:focus {
    transform: scale(1.05);
    background-color: var(--modal-btn-bg-color-hover);
  }
`;

export const Icon = styled.svg`
  stroke: var(--sidebar-button-plus-icon-color);
`;
