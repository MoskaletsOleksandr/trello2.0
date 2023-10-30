import { Global, css } from '@emotion/react';
import 'modern-normalize';

export const GlobalStyles = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700&display=swap');
        `}
      </style>
      <Global
        styles={css`
          :root {
            --timing-function: cubic-bezier(0.4, 0, 0.2, 1);

            //variables for WelcomePage and AuthPage
            --welcome-primary-text-color: #161616;
            --registration-btn-bg-color: #161616;
            --auth-btn-bg-color: #bedbb0;
            --auth-btn-bg-color-hover: #9dc888;
            --light-btn-text-color: #ffffff;
            --dark-btn-text-color: #161616;
            --active-form-title-color: #ffffff;
            --inactive-form-title-color: #ffffff4c;
            --hover-form-title-color: #ffffff99;
            --auth-input-bg-color: #1f1f1f;
            --auth-input-text-color: #ffffff;
            --auth-input-placeholder-color: #ffffff4c;
            --auth-input-border-color: #bedbb0;
            --auth-form-bg-color: #161616;
          }

          body {
            margin: 0;
            font-family: 'Roboto Slab', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 14px;
          }
          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
              monospace;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0;
          }
          ul,
          ol {
            list-style: none;
            padding: 0;
            margin: 0;
            padding: 0;
          }

          img {
            display: block;
            max-width: 100%;
            height: auto;
          }

          .dark {
            --primary-text-color: #ffffff;
            --secondary-text-color: #ffffff80;
            --link-text-color: #bedbb0;

            //variables for SideBar
            --sidebar-bg-color: #121212;
            --sidebar-logo--bg-color: #bedbb0;
            --sidebar-logo--icon-color: #1f1f1f;
            --sidebar-button-plus-bg-color: #bedbb0;
            --sidebar-button-plus-bg-color-hover: #9dc888;
            --sidebar-button-plus-icon-color: #121212;
            --sidebar-button-plus-border-color: rgba(255, 255, 255, 0.1);
            --sidebar-need-help-bg-color: #1f1f1f;
            --sidebar-active-board-text-color: #ffffff;
            --sidebar-active-board-bg-color: #1f1f1f;
            --sidebar-inactive-board-text-color: #ffffff80;
            --sidebar-needhelp-icon-color: #ffffff;
            --sidebar-border-right-color: #bedbb0;
            --sidebar-logout-icon-color: #bedbb0;
            --sidebar-logout-icon-color-hover: #9dc888;
            --sidebar-inactive-icon-color: #ffffff80;
            --sidebar-active-icon-color: #ffffff80;
            --icon-stroke: #ffffff;

            //variables for Header
            --header-bg-color: #161616;
            --header-name-color: #ffffff;
            --header-user-fill: #1f1f1f;
            --header-user-stroke: #151515;
            --header-theme-color: #ffffffcc;
            --header-theme-select-bg-color: #151515;
            --header-theme-select-border-color: #bedbb0;
            --header-theme-select-text-color: #ffffff80;
            --header-theme-select-text-color-hover: #bedbb0;

            //VARIABLES FOR ScreensPage
            --screens-page-bg-color: #1f1f1f;
            --add-column-btn-bg-color: #121212;
            --add-column-btn-text-color: #ffffff;
            --add-column-btn-plus-bg-color: #ffffff;
            --add-column-btn-plus-color: #121212;
            --placeholder-board-text-color: #ffffffcc;
            --placeholder-board-text-accent-color: #bedbb0;

            //variables for HeaderDashboard
            --header-dashboard-bg-color: #15151580;
            --header-dashboard-title-color: #ffffff;
            --filter-icon-color: #ffffffcc;
            --filter-text-color: #ffffffcc;
            --filter-popup-bg-color: #151515;
            --filter-popup-primary-text-color: #ffffff;
            --filter-popup-secondary-text-color: #ffffff80;
            --filter-popup-tertiary-text-color: #ffffff80;
            --filter-popup-border-color: #bedbb080;
            --filter-without-priority-color: #9b9b9b;
            --filter-low-priority-color: #8fa1d0;
            --filter-medium-priority-color: #e09cb5;
            --filter-high-priority-color: #bedbb0;
            --filter-checked-color: #ffffff;

            //variables for columns
            --vertical-scroll-bar-bg-color: #121212;
            --vertical-scroll-slider-bg-color: #ffffff1a;
            --horizontal-scroll-bar-bg-color: #121212;
            --horizontal-scroll-slider-bg-color: #ffffff1a;
            --column-add-btn-bg-color: #121212;
            --column-add-btn-text-color: #ffffff;
            --column-add-btn-plus-color: #121212;
            --column-add-btn-plus-bg-color: #ffffff;

            //variables for cards
            --card-bg-color: #121212;
            --card-bg-color-hover: #191919;
            --card-title-color: #ffffff;
            --card-primary-text-color: #ffffff;
            --card-secondary-text-color: #ffffff80;
            --card-border-color: #ffffff4d;
            --card-icon-color: #ffffff80;
            // #262626;

            //variables for modals
            --modal-bg-color: #151515;
            --modal-icon-close-color: #ffffff;
            --modal-window-shadow: rgba(22, 22, 22, 0.5);
            --modal-title-color: #ffffff;
            --modal-primary-text-color: #ffffff;
            --modal-secondary-text-color: #ffffff80;
            --modal-date-text-color: #bedbb0;
            --modal-btn-bg-color: #bedbb0;
            --modal-btn-bg-color-hover: #9dc888;
            --modal-btn-text-color: #161616;
            --modal-button-plus-bg-color: #161616;
            --modal-input-bg-color: #1f1f1f;
            --webkit-box-shadow: #1f1f1f 0px 0px 0px 50px inset;
            --modal-input-text-color: #ffffff;
            --modal-input-placeholder-color: #ffffff80;
            --modal-input-border-color: #bedbb0;
            --modal-icon-color: #ffffff80;
            --modal-selected-icon-color: #ffffff;
            --modal-plus-btn-bg-color: #161616;
            --modal-plus-btn-bg-color-hover: #9dc888;
            --modal-selected-plus-color: #ffffff;
            --modal-calendar-bg-color: #1f1f1f;
            --modal-title-border-color: #ffffffa1;
            --modal-profile-plus-bg-color: #bedbb0;

            //variables for progress popup
            --progress-popup-bg-color: #151515;
            --progress-popup-text-color: #ffffff80;
            --progress-popup-text-color-hover: #bedbb0;
            --progress-backdrop: rgba(255, 255, 255, 0.3);
          }
          .light {
            --primary-text-color: #161616;
            --secondary-text-color: #16161680;
            --link-text-color: #bedbb0;

            //variables for SideBar
            --sidebar-bg-color: #ffffff;
            --sidebar-logo--bg-color: #bedbb0;
            --sidebar-logo--icon-color: #ffffff;
            --sidebar-button-plus-bg-color: #bedbb0;
            --sidebar-button-plus-bg-color-hover: #9dc888;
            --sidebar-button-plus-icon-color: #121212;
            --sidebar-button-plus-border-color: #1616161a;
            --sidebar-need-help-bg-color: #f6f6f7;
            --sidebar-active-board-text-color: #161616;
            --sidebar-active-board-bg-color: #f6f6f7;
            --sidebar-inactive-board-text-color: #16161680;
            --sidebar-needhelp-icon-color: #161616;
            --sidebar-logout-icon-color: #bedbb0;
            --sidebar-logout-icon-color-hover: #9dc888;
            --sidebar-border-right-color: #bedbb0;
            --sidebar-inactive-icon-color: #16161680;
            --sidebar-active-icon-color: #bedbb0;
            --icon-stroke: #000000;

            //variables for Header
            --header-bg-color: #fcfcfc;
            --header-name-color: #161616;
            --header-user-fill: #f6f6f7;
            --header-user-stroke: #ffffff;
            --header-theme-color: #161616cc;
            --header-theme-select-bg-color: #fcfcfc;
            --header-theme-select-border-color: #bedbb0;
            --header-theme-select-text-color: #161616;
            --header-theme-select-text-color-hover: #bedbb0;

            //VARIABLES FOR ScreensPage
            --screens-page-bg-color: #f6f6f7;
            --add-column-btn-bg-color: #ffffff;
            --add-column-btn-text-color: #161616;
            --add-column-btn-plus-bg-color: #161616;
            --add-column-btn-plus-color: #ffffff;
            --placeholder-board-text-color: #161616b2;
            --placeholder-board-text-accent-color: #7da568;

            //variables for HeaderDashboard
            --header-dashboard-bg-color: #fcfcfc80;
            --header-dashboard-title-color: #161616;
            --filter-icon-color: #161616cc;
            --filter-text-color: #161616cc;
            --filter-popup-bg-color: #fcfcfc;
            --filter-popup-primary-text-color: #161616;
            --filter-popup-secondary-text-color: #16161680;
            --filter-popup-tertiary-text-color: #16161650;
            --filter-popup-border-color: #ffffff;
            --filter-without-priority-color: #c3c3c3;
            --filter-low-priority-color: #8fa1d0;
            --filter-medium-priority-color: #e09cb5;
            --filter-high-priority-color: #bedbb0;
            --filter-checked-color: #161616;

            //variables for columns
            --vertical-scroll-bar-bg-color: #1616161a;
            --vertical-scroll-slider-bg-color: #e8e8e8;
            --horizontal-scroll-bar-bg-color: #ffffff;
            --horizontal-scroll-slider-bg-color: #e8e8e8;
            --column-add-btn-bg-color: #ffffff;
            --column-add-btn-text-color: #161616;
            --column-add-btn-plus-color: #ffffff;
            --column-add-btn-plus-bg-color: #161616;

            //variables for cards
            --card-bg-color: #ffffff;
            --card-bg-color-hover: #f7f7f7;
            --card-title-color: #161616;
            --card-primary-text-color: #161616b2;
            --card-secondary-text-color: #16161680;
            --card-icon-color: #16161680;
            --card-border-color: #e8e8e8;

            //variables for modals
            --modal-bg-color: #fcfcfc;
            --modal-icon-close-color: #161616;
            --modal-window-shadow: rgba(22, 22, 22, 0.5);
            --modal-title-color: #161616;
            --modal-primary-text-color: #161616;
            --modal-secondary-text-color: #16161680;
            --modal-date-text-color: #bedbb0;
            --modal-btn-bg-color: #bedbb0;
            --modal-btn-bg-color-hover: #9dc888;
            --modal-btn-text-color: #161616;
            --modal-button-plus-bg-color: #161616;
            --modal-input-bg-color: #fcfcfc;
            --webkit-box-shadow: #fcfcfc 0px 0px 0px 50px inset;
            --modal-input-text-color: #161616;
            --modal-input-placeholder-color: #16161680;
            --modal-input-border-color: #bedbb0;
            --modal-icon-color: #16161680;
            --modal-selected-icon-color: #161616;
            --modal-plus-btn-bg-color: #161616;
            --modal-plus-btn-bg-color-hover: #9dc888;
            --modal-selected-plus-color: #ffffff;
            --modal-calendar-bg-color: #ffffff;
            --modal-title-border-color: #1616161a;
            --modal-profile-plus-bg-color: #bedbb0;

            //variables for progress popup
            --progress-popup-bg-color: #fcfcfc;
            --progress-popup-text-color: #161616;
            --progress-popup-text-color-hover: #bedbb0;
            --progress-backdrop: #bedbb033;
          }

          .violet {
            --primary-text-color: #ffffff;
            --secondary-text-color: #ffffff80;
            --link-text-color: #5255bc;

            //variables for SideBar
            --sidebar-bg-color: #5255bc;
            --sidebar-logo--bg-color: #ecedfd;
            --sidebar-logo--icon-color: #5255bc;
            --sidebar-button-plus-bg-color: #b8bcfd;
            --sidebar-button-plus-bg-color-hover: #979cea;
            --sidebar-button-plus-icon-color: #ffffff;
            --sidebar-button-plus-border-color: rgba(255, 255, 255, 0.1);
            --sidebar-need-help-bg-color: #ecedfd66;
            --sidebar-active-board-text-color: #ffffff;
            --sidebar-active-board-bg-color: #ecedfd66;
            --sidebar-inactive-board-text-color: #ffffff80;
            --sidebar-needhelp-icon-color: #ffffff;
            --sidebar-logout-icon-color: #ffffff;
            --sidebar-logout-icon-color-hover: #ffffff80;
            --sidebar-border-right-color: #ffffff;
            --sidebar-inactive-icon-color: #f2f2f2;
            --sidebar-active-icon-color: #5255bc;
            --icon-stroke: #ffffff;

            //variables for Header
            --header-bg-color: #ffffff;
            --header-name-color: #161616;
            --header-user-fill: #ecedfd;
            --header-user-stroke: #ffffff;
            --header-theme-color: #161616cc;
            --header-theme-select-bg-color: #fcfcfc;
            --header-theme-select-border-color: #ecedfd;
            --header-theme-select-text-color: #161616;
            --header-theme-select-text-color-hover: #5255bc;

            //VARIABLES FOR ScreensPage
            --screens-page-bg-color: #ecedfd;
            --add-column-btn-bg-color: #ffffff;
            --add-column-btn-text-color: #161616;
            --add-column-btn-plus-bg-color: #5255bc;
            --add-column-btn-plus-color: #ffffff;
            --placeholder-board-text-color: #161616b2;
            --placeholder-board-text-accent-color: #5255bc;

            //variables for HeaderDashboard
            --header-dashboard-bg-color: #fcfcfc80;
            --header-dashboard-title-color: #161616;
            --filter-icon-color: #161616cc;
            --filter-text-color: #161616cc;
            --filter-popup-bg-color: #fcfcfc;
            --filter-popup-primary-text-color: #161616;
            --filter-popup-secondary-text-color: #16161680;
            --filter-popup-tertiary-text-color: #16161650;
            --filter-popup-border-color: #ffffff;
            --filter-without-priority-color: #c3c3c3;
            --filter-low-priority-color: #8fa1d0;
            --filter-medium-priority-color: #e09cb5;
            --filter-high-priority-color: #bedbb0;
            --filter-checked-color: #5255bc;

            //variables for columns
            --vertical-scroll-bar-bg-color: #b8bcfd;
            --vertical-scroll-slider-bg-color: #ffffff;
            --horizontal-scroll-bar-bg-color: #ffffff;
            --horizontal-scroll-slider-bg-color: #b8bcfd;
            --column-add-btn-bg-color: #ffffff;
            --column-add-btn-text-color: #161616;
            --column-add-btn-plus-color: #ffffff;
            --column-add-btn-plus-bg-color: #5255bc;

            //variables for cards
            --card-bg-color: #ffffff;
            --card-bg-color-hover: #f7f7f7;
            --card-title-color: #161616;
            --card-primary-text-color: #161616b2;
            --card-secondary-text-color: #16161680;
            --card-icon-color: #16161680;
            --card-border-color: #e8e8e8;

            //variables for modals
            --modal-bg-color: #fcfcfc;
            --modal-icon-close-color: #161616;
            --modal-window-shadow: rgba(22, 22, 22, 0.5);
            --modal-title-color: #161616;
            --modal-primary-text-color: #161616;
            --modal-secondary-text-color: #16161680;
            --modal-date-text-color: #5255bc;
            --modal-btn-bg-color: #5255bc;
            --modal-btn-bg-color-hover: #7b7ede;
            --modal-btn-text-color: #ffffff;
            --modal-button-plus-bg-color: #ffffff;
            --modal-input-bg-color: #fcfcfc;
            --webkit-box-shadow: #fcfcfc 0px 0px 0px 50px inset;
            --modal-input-text-color: #161616;
            --modal-input-placeholder-color: #16161680;
            --modal-input-border-color: #5255bc;
            --modal-icon-color: #16161680;
            --modal-selected-icon-color: #161616;
            --modal-plus-btn-bg-color: #ffffff;
            --modal-plus-btn-bg-color-hover: #7b7ede;
            --modal-selected-plus-color: #161616;
            --modal-calendar-bg-color: #ffffff;
            --modal-title-border-color: #161616a1;
            --modal-profile-plus-bg-color: #ecedfd;

            //variables for progress popup
            --progress-popup-bg-color: #fcfcfc;
            --progress-popup-text-color: #161616;
            --progress-popup-text-color-hover: #5255bc;
            --progress-backdrop: #5255bc33;
          }
        `}
      />
    </>
  );
};

export default GlobalStyles;
