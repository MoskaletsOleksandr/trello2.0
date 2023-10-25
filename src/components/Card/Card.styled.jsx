import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  cursor: grab;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 334px;
  min-height: 154px;
  border-radius: 8px;
  background-color: var(--card-bg-color);
  color: var(--card-primary-text-color);
  padding: 14px 24px;
  border-left: 4px solid
    ${({ priority }) => `var(--filter-${priority}-priority-color)`};
  transition: background-color 300ms var(--timing-function);

  &:hover {
    background-color: var(--card-bg-color-hover);
  }
`;

export const CardTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: var(--card-title-color);
  text-transform: capitalize;
`;

export const CardTextContainer = styled.div`
  width: 100%;
  height: 38px;
  margin-top: 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CardText = styled.p`
  color: var(--card-secondary-text-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  padding-top: 14px;
  align-items: flex-end;
  justify-content: space-between;
  border-top: 1px solid var(--card-border-color);
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 14px;
`;

export const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ItemTitle = styled.p`
  font-size: 8px;
  font-weight: 400;
  color: var(--card-secondary-text-color);
`;

export const PriorityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const PriorityCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ priority }) =>
    `var(--filter-${priority}-priority-color)`};
`;

export const ItemInfo = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: var(--card-primary-text-color);
  text-transform: capitalize;
`;

export const ButtonsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1px;
  cursor: auto;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover svg {
    stroke: var(--progress-popup-text-color-hover);
  }

  &:focus svg {
    stroke: var(--progress-popup-text-color-hover);
  }
`;

export const ButtonIcon = styled.svg`
  stroke: var(--card-icon-color);
  fill: none;
  fill: ${({ readMore }) => (readMore ? 'var(--card-icon-color)' : 'none')};

  transition: stroke 300ms var(--timing-function);
`;
