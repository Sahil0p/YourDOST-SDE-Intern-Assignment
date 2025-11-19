
import React, { useEffect, useState, useMemo } from "react";
import { fetchUsers } from "../api/userApi";
import Spinner from "../components/Spinner";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import Pagination from "../components/Pagination";

const UserDirectory = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState(""); // see SortDropdown values
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch page data
  useEffect(()=>{
    let mounted = true;
    const loadUsers = async () => {
      setLoading(true);
      try {
        const data = await fetchUsers(page);
        if (!mounted) return;
        // handle both real API and fallback shapes
        setUsers(data.data ?? data);
        setTotalPages(data.total_pages ?? 1);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    loadUsers();
    return () => (mounted = false);
  }, [page]);

  // Memoize search + sort results for performance
  const displayedUsers = useMemo(() => {
    // base filtered set by search
    const q = query.trim().toLowerCase();
    const searched = users.filter((u) => {
      const first = (u.first_name || u.name || "").toLowerCase();
      const last = (u.last_name || "").toLowerCase();
      const email = (u.email || "").toLowerCase();
      return (
        first.includes(q) ||
        last.includes(q) ||
        email.includes(q)
      );
    });

    // Sorting
    if (!sortBy) return searched;

    const [field, dir] = sortBy.split("_"); // e.g. ["first", "name", "asc"]? careful: earlier values use first_name_asc
    // we'll parse manually to support "first_name" and "email"
    const compare = (a, b, key) => {
      const va = (a[key] || "").toString().toLowerCase();
      const vb = (b[key] || "").toString().toLowerCase();
      if (va < vb) return -1;
      if (va > vb) return 1;
      return 0;
    };

    const sorted = [...searched].sort((a, b) => {
      if (sortBy.startsWith("first_name")) {
        const res = compare(a, b, "first_name");
        return sortBy.endsWith("asc") ? res : -res;
      }
      if (sortBy.startsWith("email")) {
        const res = compare(a, b, "email");
        return sortBy.endsWith("asc") ? res : -res;
      }
      return 0;
    });

    return sorted;
  }, [users, query, sortBy]);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        👥 User Directory
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
        <SearchBar query={query} setQuery={setQuery} />
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="py-3 px-4">Avatar</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
              </tr>
            </thead>
            <tbody>
              {displayedUsers.length > 0 ? (
                displayedUsers.map((user) => (
                  <tr key={user.id} className="border-t hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <img
                        src={
                          user.avatar ||
                          // fallback avatar from pravatar using id
                          `https://i.pravatar.cc/150?img=${user.id || 1}`
                        }
                        alt={user.first_name || user.name}
                        className="w-12 h-12 rounded-full"
                      />
                    </td>
                    <td className="py-3 px-4">
                      {user.first_name
                        ? `${user.first_name} ${user.last_name ?? ""}`
                        : user.name}
                    </td>
                    <td className="py-3 px-4">{user.email ?? "—"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-6 text-gray-500 italic">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default UserDirectory;
