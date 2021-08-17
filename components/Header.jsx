import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle - search */}
      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm text-gray-600 placeholder-gray-400">
        <input
          className="pl-5 flex-grow bg-transparent outline-none"
          type="text"
          placeholder="Start your Search"
        />
        <SearchIcon className="h-8 hidden md:inline-flex bg-red-400 md:mx-2 text-white rounded-full p-2 cursor-pointer" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 ">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};
