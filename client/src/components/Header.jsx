import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { navigation } from "../constants/index.js";

const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
            <div className="flex justify-between items-center px-5 py-2 lg:px-7.5 xl:px-10">
                {/* Logo on the left */}
                <Link to="/" className="block w-[13rem] text-center">
                    <span className="text-2xl font-bold">CourseConnect</span>
                </Link>

                {/* Nav items on the right */}
                <nav className="flex">
                    <div className="flex flex-row items-center justify-center m-auto">
                        {navigation.map((item) => (
                            <Link
                                key={item.id}
                                to={item.url} // Use 'to' instead of 'href'
                                className="block text-base font-code uppercase text-n-1 transition-colors hover:text-color-5 px-4 py-4"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
