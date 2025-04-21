import { FaRegCircle } from 'react-icons/fa';
import { Button } from '@/components/ui/Button.jsx'; // ✅ default import
import { useNavigate } from 'react-router-dom';


const navItems = ['Product', 'Resources', 'Pricing', 'Customers', 'Blog', 'Contact'];

export const Navbar = () => {

  const navigate = useNavigate();
  const handleRedirect1 = () => {
    navigate('/signin');
  }
  const handleRedirect2 = () => {
    navigate('/signup');
  }
  return (
    <nav className=" z-50 fixed top-0 w-full flex justify-between items-center px-6 py-3 bg-[#030000] text-white">
      {/* Left Logo */}
      <div className="flex items-center space-x-2">
        <FaRegCircle className="text-white text-xl mx-0.5" />
        <span className="text-xl font-semibold">
          <a href='/' >PixLune</a></span>
      </div>

      {/* Middle Nav Items */}
      <div className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <span
            key={item}
            className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-4">
        <Button onClick={handleRedirect1} >Log in</Button>
        <Button onClick={handleRedirect2}>Sign up</Button>
      </div>
    </nav>
  );
};
