import {
  PostAction,
  PostFollowUser,
  UserProfileAvatar,
} from '@/app/components';
import PostContainer from '@/app/sections/posts/PostContainer';
import { user, post } from '@/app/constant';
import Link from 'next/link';

async function PostPage() {
  return (
    <section>
      <div className="flex flex-col items-center py-14">
        <Link href={`/${user.username}`}>
          <UserProfileAvatar />
        </Link>

        <div className="flex flex-col items-center text-center mt-6">
          {/* <p className=" mb-2">{user.fullName}</p> */}
          <div className="mb-4">
            <PostFollowUser
              username={user.username}
              fullName={user.fullName}
              isFollowing={true}
            />
          </div>

          <h3 className="text-2xl font-semibold leading-none ">
            {post.title.toUpperCase()}
          </h3>

          <PostAction className="mt-6" btnClassName="bg-white" />
        </div>
      </div>
      <PostContainer />
    </section>
  );
}
export default PostPage;
