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
      {cardData.map((item, index) => {
        <div>
          <>
            <div>
              <img
                style={{ borderRadius: "10px", width: "350px" }}
                src="/src/assets/Coolio.jpg"
                alt="main-image"
                srcset=""
              />
            </div>

            <div style={{ display: "flex" }}>
              <img
                src="/src/assets/Drake.jpg"
                alt="icon-channel"
                srcset=""
                style={{ width: "50px", height: "50px", borderRadius: "100%" }}
              />
              <p style={{ color: "white", fontSize: "1.5em" }}>
                {" "}
                Patola Bohimia Song
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1 style={{ color: "white", fontSize: "1em" }}>T-Series</h1>
              <div style={{ display: "flex" }}>
                <h1
                  style={{ color: "white", fontSize: "1em", padding: "0 20px" }}
                >
                  193 M
                </h1>
                <h1 style={{ color: "white", fontSize: "1em" }}>8 years ago</h1>
              </div>
            </div>
          </>
        </div>;
      })}
    </>
  );
}

export default Card;
