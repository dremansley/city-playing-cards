import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, CloseOutlined, MenuOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <h1 className="text-2xl font-bold text-blue-500">
                        <Link to="/">Chester Cards</Link>
                    </h1>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            <li>
                                <Link to="/" className="text-gray-600 hover:text-blue-500">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/collection" className="text-gray-600 hover:text-blue-500">
                                    Cards
                                </Link>
                            </li>
                            <li>
                                <Link to="/map" className="text-gray-600 hover:text-blue-500">
                                    Card Map
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-600 hover:text-blue-500">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-600 hover:text-blue-500">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-500"
                    >
                        <Instagram />
                    </a>
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-500"
                    >
                        <Facebook />
                    </a>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-500"
                    >
                        <Twitter />
                    </a>
                    <button onClick={toggleMenu} className="md:hidden text-gray-600 hover:text-blue-500">
                        {isOpen ? <CloseOutlined className="w-6 h-6" /> : <MenuOutlined className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <nav className="md:hidden bg-white shadow-lg border-t border-gray-200">
                    <ul className="flex flex-col space-y-4 px-4 py-4">
                        <li>
                            <Link to="/" className="block text-gray-600 hover:text-blue-500 py-2 px-4 rounded">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/collection" className="block text-gray-600 hover:text-blue-500 py-2 px-4 rounded">
                                Cards
                            </Link>
                        </li>
                        <li>
                            <Link to="/map" className="block text-gray-600 hover:text-blue-500 py-2 px-4 rounded">
                                Card Map
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="block text-gray-600 hover:text-blue-500 py-2 px-4 rounded">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block text-gray-600 hover:text-blue-500 py-2 px-4 rounded">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
