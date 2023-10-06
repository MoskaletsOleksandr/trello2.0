import styled from '@emotion/styled';

export const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-left: 14px;
  margin-bottom: 70px;
`;

export const LogoIcon = styled.svg`
  /* fill: var(--sidebar-logo--icon-color); */
  fill: black;
  /* position: absolute; */
`;

export const LogoText = styled.p`
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  font-weight: 600;
  letter-spacing: -0.64px;
  color: black;
  /* color: var(--primary-text-color); */
`;
