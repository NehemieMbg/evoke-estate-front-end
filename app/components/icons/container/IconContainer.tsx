interface IconContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const IconContainer: React.FC<IconContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`flex items-center justify-center h-10 w-10 rounded-lg bg-white hover:bg-neutral-100 transition-colors duration-200 cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};
export default IconContainer;
