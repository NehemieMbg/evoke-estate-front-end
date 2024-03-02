import { PostCard, PostsWrapper } from '../components';
import PostModal from '../components/modals/posts/PostModal';
import { posts } from '../constant';

export default function Home() {
  return (
    <main className="p-side">
      <PostsWrapper>
        {posts.map((post) => (
          <PostCard
            id={post.id}
            image={post.content}
            key={post.id}
            likes={post.likes}
            views={post.views}
            title={post.title}
          />
        ))}
      </PostsWrapper>

      {/* <PostModal /> */}
    </main>
  );
}
