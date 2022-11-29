import React from "react";

export default function Header({ filter, filters, onFilterChange }) {
  return (
    <div>
      <ul>
        {filters.map((value, i) => (
          <li key={i}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
