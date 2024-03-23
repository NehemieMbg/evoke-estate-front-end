import {
  HandThumbUpIcon,
  PencilIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface PostActionProps {
  className?: string;
  ownPost?: boolean;
  btnClassName?: string;
  postId?: number;
}

const PostAction: React.FC<PostActionProps> = ({
  className,
  btnClassName,
  ownPost,
  postId,
}) => {
  const router = useRouter();
  const buttonActionStyle = `h-11 w-11 bg-primary-100 rounded-full sm:hover:bg-neutral-200 transition-colors duration-200 ${btnClassName}`;

  const redirectToEdit = () => {
    router.push(`/edit/project/${postId}`);
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <button className={`${buttonActionStyle}`}>
        <HandThumbUpIcon className="w-6 h-6 mx-auto" strokeWidth={1.2} />
      </button>

      <button className={`${buttonActionStyle}`}>
        <PlusIcon className="w-6 h-6 mx-auto" strokeWidth={1.2} />
      </button>

      {ownPost && (
        <button onClick={redirectToEdit} className={`${buttonActionStyle}`}>
          <PencilIcon className="w-6 h-6 mx-auto" strokeWidth={1.2} />
        </button>
      )}
    </div>
  );
};
export default PostAction;
