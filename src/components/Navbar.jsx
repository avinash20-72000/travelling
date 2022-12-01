import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {FaFacebook,FaYoutube,FaInstagram,FaTwitter} from "react-icons/fa";

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
        <div className='h-20 flex items-center justify-between px-4 '>
            <div className='ml-4'>
                <h1 className='font-signature'>
                    BEACHES.
                </h1>
            </div>

            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='capitalize cursor-pointer text-xl'>
                        <Link to={link}>{link}</Link>
                    </li>
                ))}
            </ul>
            <div className='hidden md:flex cursor-pointer'>
                <BiSearch className='mr-2' size={20} />
                <BsPerson size={20} />
            </div>
            <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-10'>
                {nav ?
                    <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
            </div>
            {
                nav && (
                    <ul className="md:hidden flex flex-col justify-center  h-screen w-full absolute top-0 left-1 px-4 py-7">
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
                            <button>Account</button>
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