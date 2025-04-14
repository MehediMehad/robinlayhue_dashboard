"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import the hook
import { IoClose } from "react-icons/io5"; // Close icon
import { FiMenu } from "react-icons/fi"; // Menu icon
import { GrRestaurant } from "react-icons/gr";
import logo from "@/assests/HDlogo.png";
import { LogoutButton } from "./LogoutButton";
import { AiOutlineLineChart } from "react-icons/ai";
import { TbUserStar } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";


interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const navigation = [
  {
    label: "Dashboard",
    route: "/",
    iconPath: <AiOutlineLineChart size={23} />,
  },
  { label: "Customer", route: "/customers", iconPath: <TbUserStar size={22} /> },
  {
    label: "Restaurant",
    route: "/restaurants",
    iconPath: <GrRestaurant size={20} />,
  },
  {
    label: "Delivery Partner",
    route: "/delivery-partner",
    iconPath: <TbTruckDelivery size={22} />,
  },
];

const NavbarSlider = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const path = usePathname();

  const renderNavItem = (item: {
    label: string;
    route: string;
    iconPath: JSX.Element;
  }) => {
    const isActive = path === item.route;

    return (
      <li key={item.route}>
        <Link
          href={item.route}
          className={`relative flex items-center h-11 pr-6 py-[10px] pl-[24px] text-lg transition-all my-3 duration-300 ${
            isActive
              ? "poppins-semibold text-[#F2E8D1] font-semibold bg-[#023621] rounded-[4px]"
              : "text-[#747474] font-semibold hover:bg-[#02362117]"
          }`}
        >
          {item.iconPath}
          {isOpen && (
            <span className="ml-3 text-[18px] tracking-wide truncate">
              {item.label}
            </span>
          )}
        </Link>
      </li>
    );
  };

  return (
    <div className="relative flex">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute z-50 top-4 left-4 text-black p-2 rounded-md bg-white shadow-md hidden"
      >
        {isOpen ? <IoClose size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar Content */}
      <div
        className={`h-screen duration-300 flex flex-col font-inter border-none ${
          isOpen ? "md:w-[260px] lg:w-[260px]" : "w-[80px]"
        }`}
      >
        {/* Logo */}
        <div className="flex pl-8 items-center md:w-[320px] border-b border-[#74747480] min-h-[90px] max-h-[90px]">
          <div className="flex items-center justify-between w-full">
            <Image src={logo} alt="logo" className="" width={70} />
            <div className="w-[2px] h-12 bg-[#74747480]"></div>
          </div>
        </div>
        <div
          className={`flex flex-col justify-between`}
          style={{ height: "calc(100vh - 96px)" }}
        >
          {/* Navigation */}
          <div className="space-y-3">
            <ul className="pt-2 pb-4 space-y-1 text-sm w-[90%] mx-auto">
              {navigation.map(renderNavItem)}
            </ul>
          </div>
          <div className="space-y-3 mt-4">
            <ul className="pt-2 pb-4 space-y-1 text-sm w-[90%] mx-auto">
              <li>
                <LogoutButton isOpen={isOpen} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSlider;
