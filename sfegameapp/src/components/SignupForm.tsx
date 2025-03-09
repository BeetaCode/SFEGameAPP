import { useState } from 'react';
import userdata from '../interfaces/userdata';
// import { toast } from "react-toastify";

interface signupUserData {
  userData: userdata[];
}

function SignupForm({userData}: signupUserData) {
  const [formData, setFormData] = useState(signupUserData);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  //   try {
  //     const response = await registerUser(formData);

  //     if (response.message === "success") {
  //       toast.success("Successfully registered");
  //       onSuccess(); // Call the onSuccess callback
  //     }
  //   } catch (error) {
  //     if (
  //       Array.isArray(error.response?.data) &&
  //       error.response.data[0]?.includes("is already taken")
  //     ) {
  //       toast.error("There is an existing account with this Email.");
  //     } else {
  //       toast.error("Unknown error occurred. Please try again!");
  //     }
  // };

  return (
    <form
      className="flex"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastname}
        onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <button
        type="submit"
        className="register-button"
      >
        Signup
      </button>
    </form>
  );
}

export default SignupForm;
