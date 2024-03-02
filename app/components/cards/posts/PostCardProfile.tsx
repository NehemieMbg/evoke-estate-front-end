import Image from 'next/image';
import Link from 'next/link';
import PostAvatar from '../../avatars/PostAvatar';
import { user } from '@/app/constant';
import { EyeIcon, HandThumbUpIcon } from '@heroicons/react/20/solid';

interface Post {
  id: number;
  image: string;
  href?: string;
  likes: number;
  views: number;
  title: string;
}

const PostCardProfile: React.FC<Post> = ({
  id,
  image,
  title,
  likes,
  views,
  href,
}) => {
  const isPro = true;
  const postTitle = title.split(' ').join('-').toLowerCase();
  const userInitials = user.fullName
    .split(' ')
    .map((name) => name[0])
    .join('');

  return (
    <div>
      <Link
        key={id}
        href={`/gallery/${id}/${postTitle}`}
        className="contentContainer relative grid grid-cols-1 grid-rows-1 rounded-lg overflow-hidden"
      >
        <Image
          src={image}
          alt="post image"
          width={773}
          height={434}
          className="row-start-1 row-end-2 col-start-1 col-end-2 rounded-lg object-center"
        />

        {/* //? Hidden effects are on the global.css file */}
        <div className="contentTitle flex p-5 items-end row-start-1 row-end-2 col-start-1 col-end-2 z-[1] bg-gradient-to-t from-[rgba(30,30,30,0.7)] to-transparent">
          <h3 className="text-white font-light uppercase text-xmd">{title}</h3>
        </div>
      </Link>
    </div>
  );
};
export default PostCardProfile;
