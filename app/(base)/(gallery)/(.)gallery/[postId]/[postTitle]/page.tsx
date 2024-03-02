import ClosePost from '@/app/components/buttons/posts/ClosePost';
import PostModal from '@/app/components/modals/posts/PostModal';
import PostContainer from '@/app/sections/posts/PostContainer';
import { XMarkIcon } from '@heroicons/react/24/outline';

async function DynamicPage() {
  return (
    <PostModal>
      <PostContainer />
      <ClosePost />
    </PostModal>
  );
}
export default DynamicPage;
