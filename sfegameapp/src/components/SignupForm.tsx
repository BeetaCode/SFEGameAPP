import { useState } from 'react';
import { userData } from '../interfaces/userdata';
import { toast } from 'react-toastify';
import { signupUser } from '../services/authService';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<userData>({
    firstName: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.firstName.trim() ||
      !formData.lastname.trim() ||
      !formData.email.trim() ||
      !formData.password.trim()
    ) {
      toast.error('Please fill out all fields.');
      return;
    }

    try {
      // Call the signupUser function with formData
      const response = await signupUser(formData);

      //Handle success
      if (response.message === 'success') {
        toast.success('Registered successfully. Please confirm your email.');
        setFormData({
          firstName: '',
          lastname: '',
          email: '',
          password: '',
        });
        navigate('/Login');
      }
    } catch (error) {
      // Handle errors
      // Type guard to check if the error is an AxiosError
      if (error instanceof AxiosError) {
        if (
          Array.isArray(error.response?.data) &&
          error.response.data[0]?.includes('is already taken')
        ) {
          toast.error('There is an existing account with this email.');
        } else {
          toast.error(error.response?.data[0]);
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
        <div className="signupdiv">
          <div className="signupinternaldiv">
            <label className='signuplabels" for="grid-first-name'>
              First Name
            </label>
            <input
              className="signuptextfield"
              type="text"
              placeholder="John"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
          </div>
          <div className="signupinternaldiv">
            <label className='signuplabels" for="grid-first-name'>
              Last Name
            </label>
            <input
              className="signuptextfield"
              type="text"
              placeholder="Wick"
              value={formData.lastname}
              onChange={(e) =>
                setFormData({ ...formData, lastname: e.target.value })
              }
              required
            />
          </div>
          <div className="signupinternaldiv">
            <label className='signuplabels" for="grid-first-name'>Email</label>
            <input
              className="signuptextfield"
              type="email"
              placeholder="Johnwick@gmail.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="signupinternaldiv">
            <label className='signuplabels" for="grid-first-name'>
              Password
            </label>
            <input
              className="signuptextfield"
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
            className="usersignupbutton signupbuttonshadow"
          >
            Signup
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignupForm;
