import React, { useState } from 'react';
import { AiOutlineFieldTime, AiOutlineUser } from 'react-icons/ai';
import { BsCalendarDate, BsArrowLeft } from 'react-icons/bs';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { GoSettings } from 'react-icons/go';
import logo from '../image/logo192.png'

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'Overview', src: <AiOutlineFieldTime size={22}/> },
    { title: 'Calendar', src: <BsCalendarDate size={22}/> },
    { title: 'Patient List', src: <AiOutlineUser size={22}/> },
    { title: 'Messages ', src: <BiMessageRoundedDetail size={22}/> },
    { title: 'Payment Information', src: <FaRegMoneyBillAlt size={22}/> },
    { title: 'Settings', src: <GoSettings size={22}/> },
    ,
  ];
  return (
    <div className='flex'>
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <BsArrowLeft
          className={`absolute cursor-pointer -right-3 top-9 border-2  rounded-full p-2 text-white stroke-1 bg-blue-500 ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
          size={33}
        />
        <div className='flex gap-x-4 items-center'>
          <img
            src={logo}
            className={`cursor-pointer duration-1000 w-9 ${
              open && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={`origin-left font-medium text-xl duration-200 ${
              !open && 'scale-0'
            }`}
          >
            React
          </h1>
        </div>
        <ul className='pt-6'>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex p-2 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white text-sm items-center gap-x-4 
               `}
            >
              {Menu.src}
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
