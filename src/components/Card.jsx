import React from "react";
import card from "../card.css";

function Card() {
  const cardData = [
    {
      title: "Coolio - Gangsta's Paradise (Official Music Video) [HD] ft. L.V.",
      channel: "Coolio",
      views: "167K",
      time: "1 year",
      image: "/src/assets/Drake.jpg",
      icon: "",
    },
    {
      title: "SUMMER HIGH - AP DHILLON - LYRICAL - [PLAY BEATS]",
      channel: "Play Beats",
      views: "423K",
      time: "7 day",
      image: "/src/assets/Coolio.jpg",
      icon: "",
    },
    {
      title: "Starboy",
      channel: "The Weeknd",
      views: "70M",
      time: "5 years",
      image: "/src/assets/weekend.jpg",
      icon: "",
    },
    {
      title: "Superman",
      channel: "EminemMusic",
      views: "57.3M",
      time: "5 years",
      image: "/src/assets/superman.jpg",
      icon: "",
    },
    {
      title: "Gods Plan",
      channel: "Drake",
      views: "28.3M",
      time: "5 years",
      image: "/src/assets/bcefbc46-6cdf-4cd2-afdd-fec1cfebca7e.jpeg",
      icon: "",
    },
    {
      title: "Hope",
      channel: "XXXTENTACION",
      views: "28.3M",
      time: "5 years",
      image: "/src/assets/c0619392-d957-441c-b4f9-607f5254ca25.jpeg",
      icon: "",
    },
  ];

  return (
    <>
      {cardData.map((item, index) => (
        <div key={index} style={{ display: "inline-grid", margin: "0 7px" }}>
          <div>
            <img
              style={{ borderRadius: "10px", width: "350px" }}
              src={item.image}
              alt="main-image"
            />
          </div>

          <div
            style={{
              display: "flex",
            }}
          >
            <img
              src="/src/assets/Drake.jpg"
              alt="icon-channel"
              style={{ width: "50px", height: "50px", borderRadius: "100%" }}
            />
            <p
              style={{
                color: "white",
                fontSize: "1.5em",
              }}
            >
              {item.title.slice(0, 5)}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ color: "white", fontSize: "1em" }}>{item.channel}</h1>{" "}
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
      ))}
    </>
  );
}

export default Card;
