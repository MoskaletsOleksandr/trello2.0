import styled from '@emotion/styled';

export const StyledLink = styled.a`
  text-decoration: none;
  color: #161616;
`;
export const Container = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  width: 344px;
  height: 49px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  color: #161616;
  cursor: pointer;

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
