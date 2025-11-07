import { Home, Bell, Bug, AlignVerticalJustifyStart } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../app/navSlice";
import { Menu } from "lucide-react";
import sidebarLogo from "../assets/YtLogo.png";
import { NavLink } from "react-router-dom";
import {Link} from 'react-router-dom';

export default function Sidebar() {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div
        onClick={handleToggle}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-60 bg-gray-50 shadow-xl px-6 md:px-8 py-5 md:py-8 transform transition-transform duration-300 z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-8">
          <div className="flex gap-4  items-center">
            <Menu className="cursor-pointer" size={20} onClick={handleToggle} />
            <Link to='/' ><img className='md:w-28 w-24 object-contain' src={sidebarLogo} alt="logo" /></Link>
          </div>

          <ul className="space-y-8 list-none border-b border-gray-300 pb-8">
            <li>
              <NavLink
                to="/"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
              >
                <Home /> Home
              </NavLink>
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors flex items-center gap-2">
              <Bell /> Notifications
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors flex items-center gap-2">
              <Bug /> Report
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors flex items-center gap-2">
              <AlignVerticalJustifyStart /> Settings
            </li>
          </ul>

          <ul className="space-y-8 list-none border-b border-gray-300 pb-8">
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors flex items-center gap-2">
              <Home /> Explore
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors flex items-center gap-2">
              <Bell /> Updates
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors flex items-center gap-2">
              <Bug /> Debug
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors flex items-center gap-2">
              <AlignVerticalJustifyStart /> Organize
            </li>
          </ul>

          <ul className="space-y-8 list-none">
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors flex items-center gap-2">
              <Home /> Library
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors flex items-center gap-2">
              <Bell /> Alerts
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors flex items-center gap-2">
              <Bug /> Issues
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors flex items-center gap-2">
              <AlignVerticalJustifyStart /> Layouts
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
