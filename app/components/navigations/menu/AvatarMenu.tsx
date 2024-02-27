import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import NavbarAvatar from '../../avatars/NavbarAvatar';
import Link from 'next/link';

interface AvatarMenuProps {
  user?: {
    fullName: string;
    username: string;
    title: string;
    avatar: string;
    bio: string;
    followers: number;
    following: number;
  };
}

const AvatarMenu: React.FC<AvatarMenuProps> = ({ user }) => {
  const isLoggedIn = true;

  const navigationStyle =
    'px-4 py-2 hover:bg-neutral-50 transition-colors duration-200';

  return (
    <HoverCard closeDelay={100} openDelay={5}>
      <HoverCardTrigger asChild>
        <Link href={'/profile'}>
          {isLoggedIn && <NavbarAvatar src={user?.avatar} />}
        </Link>
      </HoverCardTrigger>

      <HoverCardContent className="w-72 p-0 mx-8">
        <Link
          href={'/username'}
          className="flex items-center gap-4  p-4 pb-4 border-b border-b-neutral-200"
        >
          <NavbarAvatar size={10} src={user?.avatar} />

          <div className="font-light">
            <p className="text-[15px] -mb-1 font-medium">{user?.fullName}</p>
            <p className="text-sm">@{user?.username}</p>
          </div>
        </Link>

        <div className="flex flex-col font-light text-sm pt-2">
          <Link href={'/pro'} className={`${navigationStyle}`}>
            Upgrade to Pro
          </Link>
          <Link href={'/username'} className={`${navigationStyle}`}>
            Profile
          </Link>
          <Link href={'/coruses'} className={`${navigationStyle}`}>
            Courses
          </Link>
          <Link href={'/notifications'} className={`${navigationStyle}`}>
            Notifications
          </Link>
          <Link href={'/dashboard'} className={`${navigationStyle}`}>
            Dashboard
          </Link>

          <Link
            href={'/sign-in'}
            className={`${navigationStyle} py-4 mt-2 border-t border-t-neutral-100`}
          >
            Sign Out
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default AvatarMenu;
