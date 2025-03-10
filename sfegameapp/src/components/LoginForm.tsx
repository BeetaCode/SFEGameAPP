import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { userlogindata } from '../interfaces/userlogindata';
import { loginUser } from '../services/authService';
import { AxiosError } from 'axios';

function LoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<userlogindata>({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      toast.error('Please fill out all fields.');
      return;
    }

    try {
      // Call the signupUser function with formData
      const response = await loginUser(formData);

      //Handle success
      if (response.message === 'success') {
        const fullName = `${response.firstName} ${response.lastName}`;

        //Storing JWT Token
        localStorage.setItem('token', response.token);
        toast.success('Login Succeessfully');
        setFormData({
          email: '',
          password: '',
        });

        navigate('/Dashboard', { state: { fullName } });
      }
    } catch (error) {
      // Handle errors
      // Type guard to check if the error is an AxiosError
      if (error instanceof AxiosError) {
        if (error.response) {
          const { data, status } = error.response;

          // Handle 400 Bad Request errors
          if (status === 400) {
            if (typeof data === 'string') {
              // If the server returns a plain string error message
              toast.error(data);
            } else if (Array.isArray(data)) {
              // If the server returns an array of error messages
              toast.error(data.join(', '));
            } else if (data.message === 'email_not_confirmed') {
              toast.error('Email not confirmed');
            } else if (data.message === 'invalid_user') {
              toast.error('Email or Password is incorrect');
            } else if (data.message) {
              // If the server returns an object with a message field
              toast.error('An error occurred');
            } else {
              // Fallback for unknown error formats
              toast.error('Invalid email or password.');
            }
          } else {
            // Handle other HTTP errors (e.g., 500, 401)
            toast.error(`An error occurred: ${status}`);
          }
        } else {
          // Handle network errors or errors without a response
          toast.error('Network error. Please try again.');
        }
      } else if (error instanceof Error) {
        // Handle generic errors
        toast.error(error.message);
      } else {
        // Handle unknown errors
        toast.error('An unexpected error occurred.');
      }
    }
  };

  return (
    <form
      className="w-full max-w-lg"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-wrap -mx-5 -mb-10">
        <div className="logindiv">
          <div className="logininternaldiv">
            <label className='loginlabels" for="grid-first-name'>Email</label>
            <input
              className="logintextfield"
              type="email"
              placeholder="Johnwick@gmail.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="logininternaldiv">
            <label className='loginlabels" for="grid-first-name'>
              Password
            </label>
            <input
              className="logintextfield"
              type="password"
              placeholder="********"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="pt-3">
          <button
            type="submit"
            className="userloginbutton loginbuttonshadow"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
