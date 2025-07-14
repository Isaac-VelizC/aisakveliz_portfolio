const Preloader = () => {
  return (
    <div
      id="preloader"
      className="fixed flex flex-wrap justify-center items-center bg-primarydark z-[500] h-screen w-full opacity-100"
    >
      <div
        id="loader"
        className="w-8 h-8 bg-accentcolor rounded-full animate-[sk-scaleout_1s_infinite_ease-in-out]"
      />
    </div>
  );
};

export default Preloader;
