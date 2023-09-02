import React from "react";

function Navigation() {
  return (
    <>
      <div className="navbar">
        <i class="ri-menu-line"></i>
        <div id="logo">
          <img src="../src/assets/youtubeIcon.png" alt="" />
          <h1>YouTube</h1>
        </div>
        <div id="search-bar">
          <input type="text" id = "search" placeholder = "search"/>
        </div>
      </div>
    </>
  );
}

export default Navigation;
