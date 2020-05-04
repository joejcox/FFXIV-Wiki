import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <section className="section search-area">
      <div className="container">
        <form action="/profile" method="GET" className="search-area-items">
          <input
            type="search"
            name="name"
            className="search-area-input"
            placeholder="Search character"
            required
          />
          <select
            className="search-area-server"
            type="select"
            name="server"
            required>
            <option value="">Select Server</option>
            <option value="Cerberus">Cerberus</option>
            <option value="Shiva">Shiva</option>
            <option value="Zodiark">Zodiark</option>
          </select>
          <input type="submit" value="Go" className="search-area-submit" />
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
