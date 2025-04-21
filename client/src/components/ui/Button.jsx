
// src/components/ui/Button.jsx
export const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`bg-white text-black font-medium px-4 py-1.5 rounded-xl hover:bg-gray-200 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

