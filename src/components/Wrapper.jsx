import React from "react";
import SideDiv from "./SideDiv";
import Card from "./Card";
export const Wrapper = () => {
  return (
    <div id="wrapper" style={{ display: "flex" }}>
      <SideDiv />
      <Card />
    </div>
  );
};
