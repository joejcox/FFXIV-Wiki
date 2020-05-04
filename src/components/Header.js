import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header>
        <h1>FFXIV WIKI</h1>
      </header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/quests">Quests</Link>
        </li>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li>
          <Link to="/items">Items</Link>
        </li>
        <li>
          <Link to="/dungeons">Dungeons</Link>
        </li>
        <li>
          <Link to="/trials">Trials</Link>
        </li>
        <li>
          <Link to="/raids">Raids</Link>
        </li>
      </ul>
      <SearchBar />
    </>
  );
};

export default Header;
