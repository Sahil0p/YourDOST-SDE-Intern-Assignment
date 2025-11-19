
import React from "react";

/**
 * value options:
 *  - ""                 -> no sorting
 *  - "first_name_asc"   -> first name A → Z
 *  - "first_name_desc"  -> first name Z → A
 *  - "email_asc"        -> email A → Z
 *  - "email_desc"       -> email Z → A
 */
const SortDropdown = ({ sortBy, setSortBy }) => {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      <option value="">Sort By</option>
      <option value="first_name_asc">First Name ↑</option>
      <option value="first_name_desc">First Name ↓</option>
      <option value="email_asc">Email ↑</option>
      <option value="email_desc">Email ↓</option>
    </select>
  );
};

export default SortDropdown;
