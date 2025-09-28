import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">ALX Project</h1>
      <nav className="space-x-4">
        <Link href="/home" className="text-gray-700 hover:text-blue-500">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-500">
          About
        </Link>
        <Link href="/posts" className="text-gray-700 hover:text-blue-500">
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
