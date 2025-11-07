import React from 'react';
import { House, BellRing, BugPlay, AlignVerticalJustifyStart } from 'lucide-react';
import { NavLink } from 'react-router-dom';



const SideIcons = () => {
  return (
    <div className="w-full bg-slate-100 py-3 md:py-8 px-6 md:px-8 h-full border-r border-slate-400">
      <div className="flex flex-col space-y-8">
      
        <ul className="space-y-8 list-none">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center cursor-pointer ${
                  isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
                }`
              }
            >
              <House />
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/watch"
              className={({ isActive }) =>
                `flex items-center cursor-pointer ${
                  isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
                }`
              }
            >
              <BellRing />
            </NavLink>
          </li>
        </ul>

    
        <ul className="space-y-8 list-none">
          <li><BugPlay className="text-gray-700 hover:text-blue-500 cursor-pointer" /></li>
          <li><AlignVerticalJustifyStart className="text-gray-700 hover:text-blue-500 cursor-pointer" /></li>
        </ul>

       
        <ul className="space-y-8 list-none">
          <li><House className="text-gray-700 hover:text-blue-500 cursor-pointer" /></li>
          <li><BellRing className="text-gray-700 hover:text-blue-500 cursor-pointer" /></li>
          <li><BugPlay className="text-gray-700 hover:text-blue-500 cursor-pointer" /></li>
          <li><AlignVerticalJustifyStart className="text-gray-700 hover:text-blue-500 cursor-pointer" /></li>
        </ul>
      </div>
    </div>
  );
};

export default SideIcons;
