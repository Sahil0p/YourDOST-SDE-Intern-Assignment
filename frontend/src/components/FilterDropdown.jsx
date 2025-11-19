const FilterDropdown = ({ filterBy, setFilterBy })=>(
    <select
      value={filterBy}
      onChange={(e) => setFilterBy(e.target.value)}
      className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">All</option>
      <option value="gmail">Gmail Users</option>
      <option value="firstLetterA">First Name A</option>
    </select>
  );
  export default FilterDropdown;
  