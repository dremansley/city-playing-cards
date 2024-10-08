import { useState } from 'react';
import { Instagram, Facebook, Twitter, CloseOutlined, MenuOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent z-20">
                        Chester Cards
                    </h1>
                    <nav className="hidden md:block z-20">
                        <ul className="flex space-x-6">
                            <li>
                                <HashLink smooth to="#cards" className="text-gray-600 hover:text-blue-500 font-medium">
                                    Cards
                                </HashLink>
                            </li>

                            <li>
                                <HashLink smooth to="#contact" className="text-gray-600 hover:text-blue-500 font-medium">
                                    Contact
                                </HashLink>
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
                            <HashLink smooth to="#cards" className="block text-gray-600 hover:text-blue-500 py-2 px-4 rounded">
                                Cards
                            </HashLink>
                        </li>

                        <li>
                            <HashLink smooth to="#contact" className="block text-gray-600 hover:text-blue-500 py-2 px-4 rounded">
                                Contact
                            </HashLink>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
