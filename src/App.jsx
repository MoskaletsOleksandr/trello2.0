import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CardsPage = lazy(() => import('./pages/CardsPage/CardsPage'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
