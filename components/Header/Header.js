import Image from 'next/image';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import HeaderIcon from '../HeaderIcon';
import { signOut, useSession } from 'next-auth/client';

const Header = () => {
  const [session] = useSession();

  return (
    <div className="flex items-center sticky top-0 z-50 bf-white lg:px-5 shadow-md sm:p-1">
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          height={40}
          width={40}
          layout="fixed"
          alt=""
        />

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={signOut}
          src={session.user.image}
          className="rounded-full cursor-pointer"
          width={40}
          height={40}
          layout="fixed"
          alt=""
        />

        <p className="hidden font-semibold whitespace-nowrap md:inline-flex">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
