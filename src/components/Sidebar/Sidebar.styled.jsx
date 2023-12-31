import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 225px;
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: var(--sidebar-bg-color);
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 3;

  transition: transform 500ms var(--timing-function);

  @media screen and (min-width: 768px) {
    width: 260px;
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

export const BackDrop = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 2;
`;

export const Title = styled.h2`
  margin-left: 14px;
  margin-bottom: 8px;
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`;

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 197px;
  height: 178px;
  background-color: var(--sidebar-active-board-bg-color);
  border-radius: 8px;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 24px;
  padding: 14px;

  @media screen and (min-width: 768px) {
    width: 212px;
    margin-left: 24px;
    margin-right: 24px;
    padding: 20px;
  }
`;

export const FeedbackTitle = styled.h3`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`;

export const FeedbackText = styled.p`
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`;

export const FeedbackBtn = styled.button`
  display: flex;
  gap: 14px;
  justify-content: left;
  align-items: center;
  color: var(--primary-text-color);
  width: 160px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 300ms var(--timing-function);

  &:hover,
  :focus {
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

export const FeedbackIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: var(--sidebar-needhelp-icon-color);
  transition: stroke 300ms var(--timing-function),
    transform 300ms var(--timing-function);
`;
