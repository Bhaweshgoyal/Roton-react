import React, { useState } from "react";
import "../CSS/NavBarComponent.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
function NavComponent() {
  const [Input, setInput] = useState("");
  const handelChange = async (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="NavBar">
      <div className="Home-icon">
        <Link to="/">
          <HomeIcon />
        </Link>
      </div>
      <span className="heading">Roton Ecomm</span>
      <input
        type="text"
        className="searchField"
        placeholder="Search"
        value={Input}
        onChange={handelChange}
      />
      <Link to="/product">
          <SearchIcon className="SearchIcon" />
      </Link>
    </div>
  );
}

export default NavComponent;
