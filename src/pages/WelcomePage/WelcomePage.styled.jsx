import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 100%);
`;

export const MainContent = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainIcon = styled.svg`
  width: 200px;
  height: 200px;
`;

export const Text = styled.p`
  color: var(--welcome-primary-text-color);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.02em;
  width: 335px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    width: 473px;
  }
`;

export const Nav = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const RegistrationBtn = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02px;
  width: 335px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--registration-btn-bg-color);
  border-radius: 8px;
  color: var(--light-btn-text-color);
  text-decoration: none;
  cursor: pointer;
  transition: background-color 500ms var(--timing-function),
    color 300ms var(--timing-function);

  @media screen and (min-width: 768px) {
    width: 344px;
  }
`;

export const LoginBtn = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02px;
  color: var(--dark-btn-text-color);
  text-decoration: none;
  width: 335px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 300ms var(--timing-function),
    color 300ms var(--timing-function);

  &:hover,
  :focus {
    background-color: var(--registration-btn-bg-color);
    color: var(--light-btn-text-color);
  }

  &:hover + * {
    background-color: transparent;
    color: var(--dark-btn-text-color);
  }

  @media screen and (min-width: 768px) {
    width: 344px;
  }
`;
