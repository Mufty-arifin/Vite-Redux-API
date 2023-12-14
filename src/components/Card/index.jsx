import { fetchUsers } from "../../reducer/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const Card = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Variabel untuk animasi

  return (
    <div className="container mx-auto">
      <div className="grid pt-32 pb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {users.map((user) => (
          <div
            key={user.id}
            className="max-w-md mx-auto bg-white rounded rounded-xl overflow-hidden shadow-md transition duration-300 transform hover:scale-105"
          >
            <a href="#">
              <img
                className="w-full h-48 object-cover"
                src={user.avatar}
                alt={user.first_name}
              />
            </a>
            <div className="p-4">
              <a
                href="#"
                className="text-xl font-bold text-gray-800 hover:text-indigo-500 transition duration-300"
              >
                {user.first_name} {user.last_name}
              </a>
              <div className="bg-gray-100 p-2 mt-2 rounded">
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
