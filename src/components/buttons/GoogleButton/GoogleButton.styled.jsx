import styled from '@emotion/styled';

export const StyledLink = styled.a`
  text-decoration: none;
  color: #161616;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 49px;
  background-color: #ffffff;
  border-radius: 8px;
  transition: background-color 300ms var(--timing-function);

  &:hover,
  :focus {
    background-color: var(--auth-btn-bg-color-hover);
  }

  &:hover svg {
    transform: scale(1.15);
  }

  &:focus svg {
    transform: scale(1.15);
  }
`;

export const Icon = styled.svg`
  width: 40px;
  height: 40px;

  transition: transform 300ms var(--timing-function);
`;
