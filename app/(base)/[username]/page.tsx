import { PostsWrapper, UserProfileAvatar } from '@/app/components';
import PostCardProfile from '@/app/components/cards/posts/PostCardProfile';
import { posts, user as userInfo } from '@/app/constant';
import { getUserByUsername } from '@/utils/functions/users';
import { IUserState } from '@/utils/types/evokeApi/types';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const UserProfilePage = async ({
  params,
}: {
  params: { username: string };
}) => {
  let user: IUserState;
  const followerSpanStyle = 'font-medium';
  const username = params.username;

  try {
    const response = await getUserByUsername(username);

    if (response.error) {
      throw new Error(response.error);
    }

    user = response;
  } catch (error) {
    console.error(error);
    // act accordingly redirect to homepage or show error message
    redirect('/');
  }

  return (
    <section className="py-10 p-side">
      {/* //? User Infos */}
      <div className="max-w-wide w-full mx-auto flex max-lg:flex-col lg:justify-between mb-14">
        <div>
          <div className="flex lg:items-center gap-7 max-lg:flex-col max-lg:gap-6">
            <UserProfileAvatar src={user.avatar} />

            <div className="">
              <h2 className="text-3xl font-medium leading-none max-lg:text-xl">
                {user.fullName}
              </h2>
              <p className="text-2xl font-light max-lg:text-lg">
                @{user.username}
              </p>
            </div>
          </div>

          <p className="font-light mt-4 lg:mt-9">{user.title}</p>

          <p className="max-w-[397px] mt-3.5 font-light text-sm">
            {user.description}
          </p>
        </div>

        <div className="max-lg:mt-6">
          <div className="font-light text-md lg:text-right">
            <p className="inline-block mr-4">
              Followers{' '}
              <span className={followerSpanStyle}>{userInfo.followers}</span>
            </p>
            <p className="inline-block">
              Following{' '}
              <span className={followerSpanStyle}>{userInfo.following}</span>
            </p>
          </div>

          <div className="flex gap-4 items-center lg:justify-end mt-5 font-light">
            {/* <Link
              href={'/'}
              className="border border-dark-gray-1 px-4 h-12 rounded-xl font-extralight flex items-center justify-center hover:bg-neutral-100 transition-colors duration-200"
            >
              Message
            </Link> */}
            <button className="bg-dark-gray-1 px-4 h-12 text-white rounded-xl font-extralight">
              Follow
            </button>
          </div>
        </div>
      </div>

      <PostsWrapper>
        {posts.map((post) => (
          <PostCardProfile
            id={post.id}
            image={post.content}
            key={post.id}
            likes={post.likes}
            views={post.views}
            title={post.title}
          />
        ))}
      </PostsWrapper>
    </section>
  );
};
export default UserProfilePage;
