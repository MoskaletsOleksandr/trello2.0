import styled from '@emotion/styled';

export const LogoContainer = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: ${({ large }) => (large ? 'center' : 'flex-start')};
  margin-left: ${({ large }) => (large ? '0' : '14px')};
  margin-bottom: ${({ large }) => (large ? '24px' : '50px')};
`;

export const IconContainer = styled.div`
  display: flex;
  width: ${({ large }) => (large ? '48px' : '32px')};
  height: ${({ large }) => (large ? '48px' : '32px')};
  background-color: ${({ large }) =>
    large
      ? 'var(--registration-btn-bg-color)'
      : 'var(--sidebar-logo--bg-color)'};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const LogoIcon = styled.svg`
  width: ${({ large }) => (large ? '40px' : '28px')};
  height: ${({ large }) => (large ? '40px' : '28px')};
  fill: ${({ large }) =>
    large ? '#bedbb0' : 'var(--sidebar-logo--icon-color)'};
`;

export const Title = styled.h1`
  color: ${({ large }) =>
    large ? 'var(--welcome-primary-text-color)' : 'var(--primary-text-color)'};
  font-size: ${({ large }) => (large ? '40px' : '18px')};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: ${({ large }) => (large ? '-1.6px' : '-0.2px')};
`;
