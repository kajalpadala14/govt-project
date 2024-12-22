import React from "react";

const Header = ({ setActiveSection }) => {
  return (
    <header className="w-screen flex items-center justify-between px-8 h-16 overflow-hidden">
      <h1 className="text-xl font-bold">Dantewada Homestay</h1>
      <nav className="flex space-x-6">
        <button
          onClick={() => setActiveSection("homePage")}
          className="text-lg hover:text-gray-400"
        >
          Home
        </button>
        <button
          onClick={() => setActiveSection("topHome")}
          className="text-lg hover:text-gray-400"
        >
          Home Stay
        </button>
        <button
          onClick={() => setActiveSection("featuredActivity")}
          className="text-lg hover:text-gray-400"
        >
          Featured Activities
        </button>
        <button
          onClick={() => setActiveSection("contact")}
          className="text-lg hover:text-gray-400"
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
