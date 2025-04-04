import React, { useEffect, useState } from "react";
import axios from "axios";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://vercelbackend-cfcd.onrender.com/users/getuser");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-24 mb-24">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-6 sm:p-10">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">User List</h2>

        {loading && <p className="text-gray-200 text-center">Loading...</p>}
        {error && <p className="text-red-400 text-center">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user) => (
              <details
                key={user._id}
                className="group bg-white/20 border border-white/30 rounded-lg p-4 cursor-pointer transition hover:bg-white/30"
              >
                <summary className="flex justify-between items-center text-white font-semibold">
                  {user.FirstName} {user.LastName}
                  <span className="text-sm text-blue-300 group-open:hidden">▼</span>
                  <span className="text-sm text-blue-300 hidden group-open:inline">▲</span>
                </summary>
                <div className="mt-2 text-gray-200 space-y-2 text-sm">
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone:</strong> {user.phone}</p>
                  <p><strong>Message:</strong> {user.Message}</p>
                </div>
              </details>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserTable;
