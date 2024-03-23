import {
  PostAction,
  PostFollowUser,
  UserProfileAvatar,
} from '@/app/components';
import PostContainer from '@/app/sections/posts/PostContainer';
import { user, post } from '@/app/constant';
import Link from 'next/link';
import getPostById from '@/utils/functions/posts/getPostById';
import { redirect } from 'next/navigation';
import { IPost } from '@/utils/types/evokeApi/types';

async function PostPage({ params }: { params: { postId: string } }) {
  const response = await getPostById(params.postId);
  if (response.error) redirect('/');

  const post: IPost = response;

  const userInitials = post.author.fullName
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <section>
      <div className="flex flex-col items-center py-14">
        <Link href={`/${post.author.username}`}>
          <UserProfileAvatar src={post.author.avatar} initials={userInitials} />
        </Link>

        <div className="flex flex-col items-center text-center mt-6">
          {/* <p className=" mb-2">{user.fullName}</p> */}
          <div className="mb-4">
            <PostFollowUser
              username={post.author.username}
              fullName={post.author.fullName}
              isFollowing={true}
            />
          </div>

          <h3 className="text-2xl font-semibold leading-none ">
            {post.title.toUpperCase()}
          </h3>

          <PostAction className="mt-6" btnClassName="bg-white" />
        </div>
      </div>
      <PostContainer post={post} />
    </section>
  );
}
export default PostPage;
