const LoadingSkeleton = () => {
  return (
    <div className="relative flex w-[120px] animate-pulse gap-2 ">
      <div className="h-9 w-9 rounded-full bg-slate-400"></div>
      <div className="flex-1">
        <div className="mb-1 h-2 rounded-lg bg-slate-400 text-lg"></div>
        <div className="h-5 rounded-lg bg-slate-400 text-sm mt-1"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
