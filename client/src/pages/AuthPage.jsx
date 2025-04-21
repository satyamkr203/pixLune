
import { FaGoogle } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const AuthPage = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-sm w-full">
        <div className="flex justify-center">
          <FaRegCircle className="text-white text-2xl mx-0.5" />
        </div>
        <h2 className="text-2xl font-semibold">Get Started with PixLune</h2>
        <div className="space-y-3">
          <button className="bg-[#5c5cfe] w-full py-2 rounded text-white flex items-center justify-center gap-2">
            <FaGoogle /> Continue with Google
          </button>
          <button onClick={handleRedirect} className="bg-[#1f1f1f] w-full py-2 rounded">
            Continue with email
          </button>
          <button className="bg-[#1f1f1f] w-full py-2 rounded">Continue with Discord</button>
        </div>
        <p className="text-sm text-gray-400">
          By signing up, you agree to our <span className="underline">Terms of Service</span> and <span className="underline">Data Processing Agreement</span>.
        </p>
        <p className="text-sm text-gray-500">
          Already have an account? <a href="/signin" className="underline">Log in</a>
        </p>
      </div>
    </div>
  );
};
