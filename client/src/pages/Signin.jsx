import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();

    axios
      .post("https://pixlune-backend.onrender.com/api/auth/login", { email, password })
      .then((response) => {
        setResponseMessage("Sign-in successful!");
        localStorage.setItem('token', response.data.token);
        setTimeout(() =>{
          navigate('/home');
        }, 1000)
      })
      .catch((err) => {
        console.log(err);
        setResponseMessage("Error signing in.");
      });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Join with us</h2>
          <p className="text-gray-400">Start your journey with us</p>
        </div>

        <form onSubmit={handleSignin} className="space-y-4">
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
            Sign in
          </button>
        </form>
        {responseMessage && <p className="text-center text-sm text-red-400">{responseMessage}</p>}
        <p className="text-center text-sm text-gray-400">
          Didn't have an account?{' '}
          <span
            className="text-indigo-400 hover:underline cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};
