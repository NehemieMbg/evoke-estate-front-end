'use client';

import { post } from '@/app/constant';
import { XMarkIcon } from '@heroicons/react/24/outline';

import Image from 'next/image';
import { useState } from 'react';

const PostContainer = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleEnableFullScreen = () => {
    setIsFullScreen(true);
  };

  const handleDisableFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <>
      <div className="relative py-10 post-grid max-w-wide w-full mx-auto h-full">
        <div className="col-start-2 col-end-12 max-lg:col-start-1 max-lg:col-end-[-1] pb-28">
          {/* //? Post Image */}
          <div onClick={handleEnableFullScreen} className="cursor-zoom-in">
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
      {isFullScreen && (
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-black z-[1000]">
          <Image
            src={post.src}
            alt={post.title}
            width={1372}
            height={1715}
            className="h-full w-full object-contain"
          />

          <button
            onClick={handleDisableFullScreen}
            className="absolute top-4 right-4 bg-neutral-400 bg-opacity-20 rounded-full p-2"
          >
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      )}
    </>
  );
};
export default PostContainer;
