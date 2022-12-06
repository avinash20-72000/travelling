import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'destinations',
        },
        {
            id: 3,
            link: 'travel',
        },
        {
            id: 4,
            link: 'view',
        },
        {
            id: 5,
            link: 'book',
        },
    ];
    return (
        <div className='w-full h-20 flex items-center justify-between px-4 fixed z-10 text-white bg-gradient-to-b from-blue-600 to-transparent '>
            <div className='ml-4'>
                <h1 className='font-signature'>
                    BEACHES.
                </h1>
            </div>

            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='capitalize cursor-pointer text-xl hover:scale-105 duration-200'>
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>
            <div className='hidden md:flex cursor-pointer'>
                <BiSearch className='mr-2' size={20} />
            </div>
            <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer z-10 '>
                {nav ?
                    <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
            </div>
            {
                nav && (
                    <ul className="text-black  bg-gray-100/90  flex flex-col  h-screen w-full absolute top-0 left-0 px-4 py-5">
                        <div className='ml-4'>
                            <h1 className='font-signature'>
                                BEACHES.
                            </h1>
                        </div>
                        {
                            links.map(({ id, link }) => (
                                <li key={id} className='capitalize cursor-pointer  text-xl border-b'>
                                    <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                                        {link}
                                    </Link>
                                </li>
                            ))
                        }
                        <div className='flex flex-col '>
                            <button className='my-6'>Search</button>
                            {/* <button>Account</button> */}
                        </div>
                        <div className='flex justify-between py-6 '>
                            <FaFacebook className='icon' />
                            <FaYoutube className='icon' />
                            <FaTwitter className='icon' />
                            <FaInstagram className='icon' />
                        </div>
                    </ul>
                )
            }


        </div>
    )
}

export default Navbar