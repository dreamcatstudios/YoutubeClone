import React from "react";
import "./card.css";

function Card() {
  const cardData = [
    {
      title: "Coolio - Gangsta's Paradise (Official Music Video) [HD] ft. L.V.",
      channel: "Coolio",
      views: "167K",
      time: "1 year ago",
      image: "/src/assets/Drake.jpg",
      icon: "",
    },
    {
      title: "SUMMER HIGH - AP DHILLON - LYRICAL - [PLAY BEATS]",
      channel: "Play Beats",
      views: "423K",
      time: "7 days ago", // Fix typo in "days"
      image: "/src/assets/Coolio.jpg",
      icon: "",
    },
    {
      title: "Starboy",
      channel: "The Weeknd",
      views: "70M",
      time: "5 years ago",
      image: "/src/assets/weekend.jpg",
      icon: "",
    },
    {
      title: "Superman",
      channel: "EminemMusic",
      views: "57.3M",
      time: "5 years ago",
      image: "/src/assets/superman.jpg",
      icon: "",
    },
    {
      title: "God's Plan", // Add missing apostrophe
      channel: "Drake",
      views: "28.3M",
      time: "5 years ago",
      image: "/src/assets/bcefbc46-6cdf-4cd2-afdd-fec1cfebca7e.jpeg",
      icon: "",
    },
    {
      title: "Hope",
      channel: "XXXTENTACION",
      views: "28.3M",
      time: "5 years ago",
      image: "/src/assets/c0619392-d957-441c-b4f9-607f5254ca25.jpeg",
      icon: "",
    },
  ];

  return (
    <div className="card-container">
      {cardData.map((item, index) => (
        <div key={index} className="card">
          {" "}
          {/* Use className instead of Name */}
          <img
            className="card-thumbnail"
            src={item.image}
            alt="main-image"
          />{" "}
          {/* Add "card-thumbnail" class */}
          <div className="bottom-section">
            <div className="card-info">
              <div className="channel-info">
                <img
                  src="/src/assets/Drake.jpg"
                  alt="icon-channel"
                  className="channel-icon"
                />
                <h1 className="card-title">{item.title}</h1>{" "}
                {/* Display the full title */}
              </div>

              <div>
                <h1 className="channel-name">{item.channel}</h1>
              </div>

              <div className="views-time">
                <h1>{item.views}</h1>
                <h1 className="time">{`• ${item.time}`}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
