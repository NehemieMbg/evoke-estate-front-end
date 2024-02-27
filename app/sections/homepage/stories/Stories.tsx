'use client';

import AddStory from '@/app/components/buttons/stories/AddStory';
import UserStory from '@/app/components/buttons/stories/UserStory';
import { user } from '@/app/constant';
import { useRef } from 'react';

const Stories = () => {
  const storiesRef = useRef<HTMLDivElement>(null);

  let isDown = false;
  let startX: number = 0;
  let scrollLeft: number = 0;

  const startDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    isDown = true;
    startX = e.pageX - (storiesRef.current?.offsetLeft ?? 0);
    scrollLeft = storiesRef.current?.scrollLeft ?? 0;
  };

  const stopDragging = () => {
    isDown = false;
  };

  const whileDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - (storiesRef.current?.offsetLeft ?? 0);
    const walk = (x - startX) * 3; //scroll-fast
    storiesRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      ref={storiesRef}
      onMouseDown={startDragging}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onMouseMove={whileDragging}
      className="relative storiesContainer overflow-hidden overflow-x-scroll h-32 cursor-grab"
    >
      <div className="p-side absolute top-0 py-6  flex gap-12">
        <AddStory />
        <UserStory username={user.username} src={user.avatar} />
        <UserStory username={user.username} src={user.avatar} />
        <UserStory username={user.username} src={user.avatar} />
        <UserStory username={user.username} src={user.avatar} />
        <UserStory username={user.username} src={user.avatar} />
        <UserStory username={user.username} src={user.avatar} />
        <UserStory username={user.username} src={user.avatar} />
        <UserStory username={user.username} src={user.avatar} />
        <UserStory username={user.username} src={user.avatar} />
        <UserStory username={user.username} src={user.avatar} />
        <UserStory username={user.username} src={user.avatar} />
        <UserStory username={user.username} src={user.avatar} />
        <UserStory username={user.username} src={user.avatar} />
        <UserStory username={user.username} src={user.avatar} />
        <UserStory username={user.username} src={user.avatar} />
        <UserStory username={user.username} src={user.avatar} />
      </div>
    </section>
  );
};
export default Stories;
