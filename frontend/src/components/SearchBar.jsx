const SearchBar = ({query, setQuery}) => (
    <input
      type="text"
      placeholder="Search by name or email..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="border p-2 rounded w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
  export default SearchBar;
  