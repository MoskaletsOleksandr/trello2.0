# Trello2.0

---

## Table of Contents

1. [Description](#description)
2. [Main Features](#main-features)
3. [Backend](#backend)
4. [Instructions for Installing and Running Trello2.0 Locally](#instructions-for-installing-and-running-trello20-locally)
5. [Technologies Used](#technologies-used)
6. [Project Structure](#project-structure)
7. [How It Works](#how-it-works)
8. [Future Plans](#future-plans)
9. [Screenshot Gallery](#screenshot-gallery)
10. [License](#license)

---

## ![Trello2.0](https://res.cloudinary.com/do7vvnlbr/image/upload/v1698334241/trello2.0/screenshots/Trello2-0.png)

---

## _Description_

**Trello2.0** is an educational project created to deepen my knowledge of software development. This project has no commercial purposes and is intended solely for education.

### Main features:

- **Authorization**: Users can register through the form or using Google Authentication.
- **Home screen**: After authorization, users are automatically taken to the home screen.
- **Header**: The header allows you to change the interface theme and edit user data.
- **Sidebar**: The Sidebar allows users to create new boards, select existing boards, send feedback to the developers (me), and log out of their account.
- **Create and edit boards**: Users can create their own boards, and once created, they are automatically taken to their board page. This is where you can create columns and cards.
- **Manage Columns and Cards**: Users can reorder columns and cards within a board, edit them, add descriptions, and set priorities and deadlines.
- **Drag and drop cards and columns**: The project uses Drag and Drop technology to drag and drop cards and columns. Users can change the order of cards in a column or between columns by dragging and dropping.
- **Card Filtering**: Cards can be filtered by their priority, which can be defined when creating or editing a card.

### Backend:

You can find the backend code [here: https://github.com/MoskaletsOleksandr/trello2.0-backend](https://github.com/MoskaletsOleksandr/trello2.0-backend).
The project's backend is deployed on the free hosting platform [render.com](https://render.com/). The initial launch may be accompanied by a loading spinner, as free servers can occasionally experience temporary slowdowns.

---

## Instructions for Installing and Running Trello2.0 Locally

1.  **Check Prerequisites:** Make sure that the following dependencies are already installed on your computer: Node.js. The project is developed using Node.js, and you need to have this environment installed. You can download it from the official [Node.js website](https://nodejs.org/en).
2.  **Download the Project:** You can download the project from the GitHub repository. Use the **_git clone_** command or download an archive with project files and extract it.
3.  **Install Dependencies:** After downloading the project, open your terminal and navigate to the project's root directory. Execute the following command to install all the necessary dependencies:

```
npm install
```

4.  **Start the Server:** After successfully installing the dependencies, you can start the server by using the following command:

```
npm start
```

This command will launch the server and grant access to your local instance of Trello2.0 at **http://localhost:5173**. 5. **Start the Backend:** To access the full functionality of Trello2.0 and interact with the application, users need to set up the local backend environment by following these steps:

- **_Clone the Backend:_** First, users should clone or download the backend code [here](https://github.com/MoskaletsOleksandr/trello2.0-backend). Make sure to follow the instructions in the backend repository to set it up locally.
- **_Run the Local Backend:_** After downloading the backend code, users need to run the local backend server. By default, the frontend code is configured to send requests to http://localhost:5000 in the **_axiosConfig.js_** file.
- **_Google Authorization:_** If users prefer to use Google authorization for a seamless login experience, the backend will automatically handle the authentication process. The server will redirect them to the live Trello2.0 application after successful authorization.
- **_Use the Live Server (Optional):_** If users don't want to set up the backend locally and prefer to work with the online version, they can modify the **_baseURL_** variable in the **_axiosConfig.js_** file to ***https://trello2-0-backend.onrender.com.***
- ✨**_Magic ✨_**

## Technologies Used

Trello2.0 utilizes a range of modern technologies, libraries, and tools for its development and functionality. Here is a list of the core technologies and libraries used in the project:

- **[React](https://react.dev/):** A library for building the user interface.
- **[Redux Toolkit](https://redux-toolkit.js.org/):** A library for state management and data handling.
- **[React Router](https://reactrouter.com/en/main):** A library for page navigation and routing.
- **[Axios](https://axios-http.com/):** A library for making HTTP requests and interacting with the server.
- **[Formik](https://formik.org/):** A library for working with forms and their validation.
- **[Yup](https://github.com/jquense/yup):** A library for data validation in forms.
- **[React-Redux](https://react-redux.js.org/):** A package for integrating Redux into React applications.
- **[Emotion Styled](https://emotion.sh/docs/introduction/):** A library for creating styles in React using CSS-in-JS.
- **[Date-fns](https://date-fns.org/):** A library for working with dates and time in JavaScript
- **[React Hot Toast](https://react-hot-toast.com/):** A library for notifications and messages within the application.
- **[Vite](https://vitejs.dev/):** A fast bundler and development environment for React applications.
- **[Eslint](https://eslint.org/):** A tool for detecting and fixing code errors.
- **[Gh-pages](https://github.com/tschaub/gh-pages/):** A tool for publishing static websites on GitHub Pages.
- **[Redux Persist](https://github.com/rt2zz/redux-persist/):** A library for persisting the Redux state in local storage.

---

## Project Structure

- **_public_** - Contains public assets and the main HTML file
- **_src_** - The source code directory.
  - **_api_** - Directory for API handling
    - **_authApi_** - Authentication-related API calls
    - **_boardsApi_** - API calls for managing boards
    - **_cardsApi_** - API calls for card-related operations
    - **_columnApi_** - API calls for column-related operations
    - **_axiosConfig.js_** - Configuration file for Axios, the HTTP client
  - **_assets_** - Contains icons and images used throughout the application
  - **_components_** - Reusable React components
    - **_BoardList_** - Component for rendering a list of boards
    - **_buttons_** - Different buttons
    - **_Card_** - Component for rendering cards
    - **_Column_** - Component for rendering columns
    - **_common_** Common UI components (like Logo, Loader etc.)
    - **_forms_** - Different forms
    - **_Header_** - Header component
    - **_MainDashboard_** - Main dashboard component
    - **_modals_** - Different reusable modals
    - **_PlaceHolderBoard_** - Placeholder board component
    - **_PrivateRoute_** - Route component for private routes
    - **_PublicRoute_** - Route component for public routes
    - **_Sidebar_** - Sidebar component
    - **_UserInfo_** - User information component
  - **_data_** - Data related to the application
    - **_constants.js_** - This file contains various constants
  - **_pages_** - Top-level page components
    - **_AuthPage_** - Authentication page
    - **_CardsPage_** - Page for managing cards
    - **_HomePage_** - The main application home page
    - **_WelcomePage_** - Welcome page for unauthenticated users
  - **_redux_** - Redux state management configuration
    - **_auth_** - Authentication-related actions, selectors and reducers
    - **_boards_** - Actions, selectors and reducers for boards
    - **_cards_** - Actions, selectors and reducers for cards
    - **_columns_** - Actions, selectors and reducers for columns
    - **_reducer.js_** - Root reducer combining all reducers
    - **_selectors.js_** - Selectors for retrieving specific data from the store
    - **_store.js_** - Redux store configuration
  - **_App.jsx_** - The main application component
  - **_GlobalStyles.jsx_** - Global styles for the application
  - **_main.jsx_** - Entry point for the application

---

## How It Works

1. **Authorization**: The app uses tokens for user authentication - an access token and a refresh token. If the access token expires, the backend sends a 401 error. An interceptor handles this error by requesting a new access token using the refresh token with a "Refresh" request. The refresh token remains valid as long as the user is active and expires after a month of inactivity.

2. **Drag and Drop Functionality**: The app implements drag-and-drop (DnD) without external libraries. After a card is moved, the backend updates its position in the database and that of other affected cards.

3. **Dynamic Background Images**: The app loads background images optimized for the user's screen size and resolution.

4. **Server Activation**: The free hosting service may put the server into an inactive state. To address this, the app wakes up the backend during the initial load, displaying a loading spinner.

5. **Feedback and Support**: Users can contact the developer via email or provide feedback through a dedicated form on the live app. For questions or assistance, feel free to reach out.

---

## Future Plans

Here are the upcoming features and improvements we plan to implement in Trello2.0:

1. **Card Details Modal**: We aim to introduce a feature that allows users to view each card's details in a modal window, providing a more in-depth look at the card's information.

2. **Device Information**: We plan to explore retrieving device data on the frontend, enabling us to work on creating a more seamless user experience and enhancing token management across multiple devices.

3. **Secure Password Reset**: We're working on adding a secure password reset functionality through a frontend form, ensuring users can reset their passwords with ease.

4. **Deadline Notifications**: To help users manage their tasks effectively, we plan to introduce pop-up notifications for approaching card deadlines.

5. **Cross-Board Card and Column Transfer**: We aim to allow users to move cards and columns seamlessly between boards, providing a more flexible and versatile project management experience.

Stay tuned for these upcoming features, and thank you for your continued support and feedback. If you have any suggestions or feature requests, please feel free to reach out through the app or via email.

---

## Screenshot Gallery

Welcome to the Trello2.0 Screenshot Gallery. Take a visual tour of our app with these screenshots to get a feel for the user interface and key features. Explore how Trello2.0 can help you manage your projects and tasks effectively.

![Screenshot 1](https://res.cloudinary.com/do7vvnlbr/image/upload/v1698333988/trello2.0/screenshots/Trello-HomePage.png)

_Home Page with creating a new board modal_

![Screenshot 2](https://res.cloudinary.com/do7vvnlbr/image/upload/v1698334019/trello2.0/screenshots/Trello-creating-card.png)

_Creating Card Modal on existing board_

![Screenshot 3](https://res.cloudinary.com/do7vvnlbr/image/upload/v1698334052/trello2.0/screenshots/Trello-Sidebar.png)

_Sidebar_

![Screenshot 4](https://res.cloudinary.com/do7vvnlbr/image/upload/v1698334075/trello2.0/screenshots/Trello-CardsPage.png)

_Cards Page_

![Screenshot 5](https://res.cloudinary.com/do7vvnlbr/image/upload/v1698334099/trello2.0/screenshots/Trello-selects.png)

_All Selects_

I hope these screenshots give you an overview of Trello2.0's user interface and functionality. If you'd like to explore further or have any questions, feel free to try out the app or reach out to me.

---

## License

**Free Software, Hell Yeah!**
