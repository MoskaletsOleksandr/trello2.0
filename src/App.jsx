import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useState } from 'react';
import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GlobalStyles from './GlobalStyles';
import { wakeUpBackendThunk } from './redux/auth/thunks';
import { selectIsBackendReady } from './redux/auth/selectors';
import { Loader } from './components/common/Loader';
import { WaitingLoader } from './components/common/WaitingLoader';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CardsPage = lazy(() => import('./pages/CardsPage/CardsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isBackendReady = useSelector(selectIsBackendReady);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    dispatch(wakeUpBackendThunk());

    const timeout = setTimeout(() => {
      if (!isBackendReady) {
        setShowLoader(true);
      }
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
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
        <Route
          path="*"
          element={
            <PublicRoute>
              <WelcomePage />
            </PublicRoute>
          }
        />
      </Routes>
      {showLoader && !isBackendReady && <WaitingLoader />}
    </Suspense>
  );
};
