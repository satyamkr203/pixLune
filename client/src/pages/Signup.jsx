
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    console.log("Attempting signup with:", {
      firstName,
      lastName,
      email,
      password
    });

    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });

      console.log("Signup success:", response.data);
      setResponseMessage("User created successfully!");
      localStorage.setItem('token', response.data.token);

      setTimeout(() => {
        navigate('/home');
      }, 1000);
      
    } catch (err) {
      console.error("Signup error:", err);

      if (err.response) {
        console.error("Backend error:", err.response.data);
        setResponseMessage(err.response.data?.message || "Error from server.");
      } else if (err.request) {
        console.error("No response received:", err.request);
        setResponseMessage("No response from server.");
      } else {
        console.error("Request error:", err.message);
        setResponseMessage("Request setup failed.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Create your account</h2>
          <p className="text-gray-400">Start your journey with us</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-sm mb-1">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 rounded bg-[#1f1f1f] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 rounded bg-[#1f1f1f] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-[#1f1f1f] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-[#1f1f1f] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition"
          >
            Sign Up
          </button>
        </form>

        {responseMessage && <p className="text-center text-sm text-red-400">{responseMessage}</p>}

        <p className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <span
            className="text-indigo-400 hover:underline cursor-pointer"
            onClick={() => navigate('/signin')}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};
