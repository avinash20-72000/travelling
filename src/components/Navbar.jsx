import React from 'react';
import {BsPerson} from 'react-icons/bs';
import { BiSearch} from 'react-icons/bi';
import { Link } from "react-scroll";

const Navbar = () => {
    const links =[
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
    <div className='h-20 flex items-center justify-between '>
        <div className='ml-7'>
            <h1 className='font-signature font-bold'>
                BEACHES
            </h1>
        </div>

        <ul className='flex'>
            {links.map(({id,link})=>(
                <li key={id} className='capitalize ml-6 cursor-pointer'>
                    <Link to={link}>{link}</Link>
                </li>
            ))}
        </ul>
        <div className='flex gap-2 cursor-pointer'>
            <BiSearch className=''/>
            <BsPerson className='mr-7'/>
        </div>
    </div>
  )
}

export default Navbar