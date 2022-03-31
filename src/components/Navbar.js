import React from 'react';
import { GrFormAdd } from 'react-icons/gr';
import { AiOutlineUser } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import AppointmentDetails from './AppointmentDetails';
import PatientDetails from './PatientDetails';

const Navbar = () => {
  return (
    <div className='bg-yellow-300 flex-1 px-5 py-4'>
      <div className='flex justify-between item-center'>
          <div className='flex items-center'>
            <AiOutlineUser />
            <div>Diane Cooper</div>
          </div>
          <div className='flex items-center'>
            <input type='text' />
            <GrFormAdd />
            <IoMdNotificationsOutline />
          </div>
      </div>
    </div>
  );
};

export default Navbar;
