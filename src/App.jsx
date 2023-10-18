import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from './redux/auth/thunks';
import GlobalStyles from './GlobalStyles';
import { Loader } from './components/Loader';
import { selectError } from './redux/selectors';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CardsPage = lazy(() => import('./pages/CardsPage/CardsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectError);
  // console.log('errorMessage: ', errorMessage);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(refreshUserThunk());
    }
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <WelcomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/:id"
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        >
          <Route
            path=":boardName"
            element={
              <PrivateRoute>
                <CardsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<WelcomePage />} />
      </Routes>
    </Suspense>
  );
};
