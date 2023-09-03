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
      image: "/src/assets/Coolio.jpg", // Corrected image path
    },
    {
      title: "How this not works??",
      para: "This is how this works",
      channel: "Firstpost",
      views: "169K",
      time: "2 days", // Corrected time
      image: "/src/assets/Drake.jpg", // Corrected image path
    },
  ];

  return (
    <>
      {cardData.map((item, index) => (
        <div key={index}>
          <div className="grid">
            <div>
              <img
                style={{ borderRadius: "10px", width: "350px" }}
                src={item.image} 
                alt="main-image"
              />
            </div>

            <div style={{ display: "flex" }}>
              <img
                src="/src/assets/Drake.jpg"
                alt="icon-channel"
                style={{ width: "50px", height: "50px", borderRadius: "100%" }}
              />
              <p style={{ color: "white", fontSize: "1.5em" }}>{item.title}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1 style={{ color: "white", fontSize: "1em" }}>
                {item.channel}
              </h1>{" "}
              <div style={{ display: "flex" }}>
                <h1
                  style={{ color: "white", fontSize: "1em", padding: "0 20px" }}
                >
                  {item.views}
                </h1>
                <h1 style={{ color: "white", fontSize: "1em" }}>{item.time}</h1>{" "}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
