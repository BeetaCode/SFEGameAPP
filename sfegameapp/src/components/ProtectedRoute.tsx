import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Redirect to login if no token is found
      navigate('/login');
    }
  }, [navigate]);

  return children;
}

export default ProtectedRoute;
