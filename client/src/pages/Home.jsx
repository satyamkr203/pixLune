import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [promptHistory, setPromptHistory] = useState([]);
  const [generatedImageUrl, setGeneratedImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('promptHistory')) || [];
    setPromptHistory(storedHistory);
  }, []);

  const handleProfileClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleGenerateImage = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError('');

    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      navigate('/login');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (response.ok) {
        setGeneratedImageUrl(data.imageUrl);

        const updatedHistory = [prompt, ...promptHistory.slice(0, 9)];
        setPromptHistory(updatedHistory);
        localStorage.setItem('promptHistory', JSON.stringify(updatedHistory));
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Server Error');
    } finally {
      setLoading(false);
      setPrompt('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white relative">

      {/* Sidebar */}
      <div className="w-64 bg-gray-800 flex flex-col justify-start p-4">
        <h2 className="text-lg font-bold mb-6">Recent</h2>
        <ul className="space-y-3">
          {promptHistory.length > 0 ? (
            promptHistory.map((item, index) => (
              <li key={index} className="text-gray-400 truncate">{item}</li>
            ))
          ) : (
            <li className="text-gray-500">No History</li>
          )}
        </ul>
      </div>

      {/* Top Right Profile Circle */}
      <div className="absolute top-4 right-4">
        <button
          onClick={handleProfileClick}
          className="bg-gray-700 hover:bg-gray-600 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
        >
          S
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="mt-2 bg-gray-700 rounded-md shadow-lg absolute right-0 w-32 z-10">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-red-400 hover:bg-gray-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
          PixLune 
        </h1>
        <span>Create your own style Image</span>
        {loading && <p className="text-gray-400 mb-4">Generating image...</p>}
        {error && <p className="text-red-400 mb-4">{error}</p>}

        {generatedImageUrl && (
          <div className="mt-6">
            <img
              src={generatedImageUrl}
              alt="Generated"
              className="max-w-md rounded-lg shadow-lg"
            />
          </div>
        )}
        <form
          onSubmit={handleGenerateImage}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] max-w-2xl flex items-center bg-gray-800 rounded-full p-3 shadow-lg"
        >
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white px-4"
            placeholder="Enter prompt to generate an image..."
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`ml-2 px-4 py-2 rounded-full text-white font-semibold ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
          >
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </form>
      </div>
    </div>
  );
};
