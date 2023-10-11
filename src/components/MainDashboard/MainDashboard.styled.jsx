import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--screens-page-bg-color);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({ background }) => background?.mobileURL});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${({ background }) => background?.mobileRetinaURL});
  }

  @media screen and (min-width: 376px) {
    background-image: url(${({ background }) => background?.tabletURL});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${({ background }) => background?.tabletRetinaURL});
    }
  }

  @media screen and (min-width: 769px) {
    background-image: url(${({ background }) => background?.desktopURL});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${({ background }) =>
        background?.desktopRetainaURL});
    }
  }
`;
