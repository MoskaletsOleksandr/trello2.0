import styled from '@emotion/styled';

export const Container = styled.div`
  width: 68px;
  height: 78px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

export const IconAvatar = styled.svg`
  width: 68px;
  height: 68px;
  border-radius: 8px;
  fill: var(--header-user-fill);
  stroke: var(--header-user-stroke);
`;

export const AvatarImg = styled.img`
  display: block;
  width: 68px;
  height: 68px;
  border-radius: 8px;
`;

export const Label = styled.label`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background-color: var(--modal-profile-plus-bg-color);
  cursor: pointer;
`;

export const StyledField = styled.input`
  display: none;
  position: absolute;
`;

export const IconPlus = styled.svg`
  stroke: black;
  width: 10px;
  height: 10px;
`;
