import { post, user } from '@/app/constant';

import Image from 'next/image';

const PostContainer = () => {
  const userInitials = user.fullName
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="relative py-10 post-grid max-w-wide w-full mx-auto h-full">
      <div className="col-start-2 col-end-12 max-lg:col-start-1 max-lg:col-end-[-1] pb-28">
        {/* //? Post Image */}
        <div>
          <Image
            src={post.src}
            alt={post.title}
            width={1372}
            height={1715}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default PostContainer;
