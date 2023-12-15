
const Navbar = () => {
    const logoutUser = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      };
  return (
    <div className="p-5 flex justify-between text-center fixed top-0 w-full bg-white z-10">
      <div className="flex">
        <img className="h-7 w-7 " src="../../public/redux.svg" alt="" />
        <h2 className="text-xl font-bold text-[#002D74] ml-2">Redux API</h2>
      </div>

      <h2 className="text-xl font-bold text-[#002D74] justify-center text-center">
        List Users
      </h2>
      <button
        onClick={logoutUser}
        className="py-2 px-5 bg-[#002D74] text-white font-bold rounded-xl hover:scale-105 duration-300 "
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
