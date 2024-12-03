const Skeleton = ({ className = '', ...props }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded ${className}`}
      {...props}
    />
  );
};

export const CardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-dark-surface p-4 rounded-lg shadow">
      <Skeleton className="h-48 w-full mb-4" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
};

export default Skeleton; 