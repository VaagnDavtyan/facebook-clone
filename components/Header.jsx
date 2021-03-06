import React from 'react'
import HeaderIcon from './HeaderIcon';
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { session, signOut, useSession } from "next-auth/client";

function Header() {
    return (
        <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'> 
            {/* header left */}
            <div className='flex items-center'>
            <Image
          src="https://links.papareact.com/5me"
          width="40"
          height="40"
          layout="fixed"
        />
        <div className="flex m1-2 items-center rounded-full bg-gray-100 p-2">
<SearchIcon className='h-6 text-gray-600'/>
            <input className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' type='text' placeholder=' Search Facebook' />
        </div>
            </div>

            {/* header center */}

<div className="flex justify-center flex-grow">
    <div className='flex space-x-6 md:space-x-2'>
        <HeaderIcon active Icon={HomeIcon} />
        <HeaderIcon Icon={FlagIcon} />
        <HeaderIcon Icon={PlayIcon} />
        <HeaderIcon Icon={ShoppingCartIcon} />
        <HeaderIcon Icon={UserGroupIcon} />
    </div>
</div>
            {/* header right */}
            <div className='flex items-center sm:space-x-2 justify-end'>
                {/* profile pic */}

                

                {/* <Image
          className="rounded-full cursor-pointer"
          src='https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          width="40"
          height="40"
          layout="fixed"
        /> */}
                <p className=' whitespace font-semibold pr-3'>Vaagn Davtyn</p>
                <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
            </div>
        </div>
    )
}

export default Header
