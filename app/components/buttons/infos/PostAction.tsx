import { HandThumbUpIcon, PlusIcon } from '@heroicons/react/24/outline';

interface PostActionProps {
  className?: string;
  btnClassName?: string;
}

const PostAction: React.FC<PostActionProps> = ({ className, btnClassName }) => {
  const buttonActionStyle = `h-11 w-11 bg-primary-100 rounded-full sm:hover:bg-neutral-200 transition-colors duration-200 ${btnClassName}`;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <button className={`${buttonActionStyle}`}>
        <HandThumbUpIcon className="w-6 h-6 mx-auto" strokeWidth={1.2} />
      </button>

      <button className={`${buttonActionStyle}`}>
        <PlusIcon className="w-6 h-6 mx-auto" strokeWidth={1.2} />
      </button>
    </div>
  );
};
export default PostAction;
