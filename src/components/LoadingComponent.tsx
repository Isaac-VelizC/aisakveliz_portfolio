const LoadingComponent = () => {
  return (
<div className="flex-col gap-4 w-full h-screen flex items-center justify-center">
  <div
    className="w-16 h-16 border-3 border-transparent text-neonPink text-4xl animate-spin flex items-center justify-center border-t-neonPink rounded-full"
  >
    <div
      className="w-12 h-12 border-3 border-transparent text-neonCyan text-2xl animate-spin flex items-center justify-center border-t-neonCyan rounded-full"
    ></div>
  </div>
</div>

  );
};

export default LoadingComponent;
