import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import BananaGame from './components/BananaGame';
import TomatoGame from './components/TomatoGame';
import SmileGame from './components/SmileGame';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Home route */}
          <Route
            path="/home"
            element={<Home />}
          />
          {/* Signup route */}
          <Route
            path="/signup"
            element={<Signup />}
          />
          {/* Login route */}
          <Route
            path="/login"
            element={<Login />}
          />
          {/* Default route (redirect to /home) */}
          <Route
            path="/"
            element={<Home />}
          />
          {/* Dashboard route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* Banana Game route */}
          <Route
            path="/bananagame"
            element={<BananaGame />}
          />
          {/* Tomato Game route */}
          <Route
            path="/tomatogame"
            element={<TomatoGame />}
          />
          {/* Smile Game route */}
          <Route
            path="/smilegame"
            element={<SmileGame />}
          />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
