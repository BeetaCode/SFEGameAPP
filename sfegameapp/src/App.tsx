import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';

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
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
