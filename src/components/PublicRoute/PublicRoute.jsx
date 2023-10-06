import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from '../../redux/auth/selectors';

const PublicRoute = ({ children }) => {
  const user = useSelector(selectUser);
  return !user ? children : <Navigate to={'/home'} />;
};

export default PublicRoute;
