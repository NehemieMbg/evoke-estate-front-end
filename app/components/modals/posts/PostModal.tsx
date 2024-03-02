'use client';

import { useRouter } from 'next/navigation';
import GalleryAvatar1 from '../../avatars/GalleryAvatar1';
import { post, user } from '@/app/constant';
import Link from 'next/link';
import PostFollowUser from '../../buttons/infos/PostFollowUser';
import { PostAction } from '../..';

interface PostModalProps {
  children: React.ReactNode;
}

const PostModal: React.FC<PostModalProps> = ({ children }) => {
  const router = useRouter();
  const closeModal = () => router.back();

  const userInitials = user.fullName
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <>
      <div
        onClick={closeModal}
        className="fixed top-0 left-0 right-0 bottom-0 bg-dark-gray-1 bg-opacity-40 z-[110]"
      ></div>

      <section className="fixed top-8 max-lg:top-0 left-0 right-0 bottom-0 bg-primary-100 z-[120] rounded-tl-3xl max-lg:rounded-none overflow-hidden overflow-y-scroll">
        <div className="sticky top-0 z-[120] flex items-center justify-between p-side py-3.5 mb-3 h-20 bg-white">
          {/* //? User Info */}
          <div className="flex items-center gap-4 max-lg:gap-2">
            <div className="max-sm:hidden">
              <GalleryAvatar1 src={user.avatar} initials={userInitials} />
            </div>

            <div className="text-xmd max-lg:text-sm">
              <h3 className="font-semibold leading-none">
                {post.title.toUpperCase()}
              </h3>

              <PostFollowUser
                username={user.username}
                fullName={user.fullName}
                isFollowing={true}
              />
            </div>
          </div>

          <PostAction />
        </div>

        <div className="">{children}</div>
      </section>
    </>
  );
};
export default PostModal;
