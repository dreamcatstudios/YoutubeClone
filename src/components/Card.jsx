import React from "react";
import card from "../card.css";

function Card() {
  const cardData = [
    {
      title: "How this works?",
      para: "This is how this works",
      channel: "Firstpost",
      views: "169K",
      time: "1 day",
      image: "",
    },
    {
      title: "How this not works??",
      para: "This is how this works",
      channel: "Firstpost",
      views: "169K",
      time: "2 day",
      image: "",
    },
  ];

  return (
    <>
      {/* <div className="card">
        {cardData.map((item, index) => {
          return (
            <div key={index} className="card">
              <p>{item.title}</p>
            </div>
          );
        })}
      </div> */}

      <div>
        <div>
          <img src="" alt="main-image" srcset="" />
          <div>
            <img src="" alt="icon-channel" srcset="" />
            <p> Patola Bohimia Song</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1>T-Series</h1>
              <div style={{ display: "flex", gap: 3 }}>
                <h1>193 M</h1>
                <h1>8 years ago</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
