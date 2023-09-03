import React from "react";
import component from "../component.css"

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
          <i class="ri-search-line" id = "lens"></i>
          <i class="ri-mic-fill" id = "mic"></i>
        </div>
      </div>
    </>
  );
}

export default Navigation;
