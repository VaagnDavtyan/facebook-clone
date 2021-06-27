import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
  } from "@heroicons/react/outline";
  import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
  } from "@heroicons/react/solid";
  import { useSession } from "next-auth/client";
  import React from "react";
  import SidebarRow from "./SidebarRow";

function Sidebar() {
    const [session, loading] = useSession();
    return (
        <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
             {/* <SidebarRow src="https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title='Vaagn Davtyan' /> */}
            {/* <SidebarRow Icon={UserIcon} title='Friands' /> */}
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
        </div>
    )
}

export default Sidebar
