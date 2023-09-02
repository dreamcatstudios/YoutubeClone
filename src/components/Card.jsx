import React from "react";

function Card() {
  const cardData = [
    {
      title: "How this works?",
      para: "This is how this works",
      channel: "Firstpost",
      views: "169K",
      time: "1 day",
    },
    {
      title: "How this not works??",
      para: "This is how this works",
      channel: "Firstpost",
      views: "169K",
      time: "2 day",
    },
  ];

  return (
    <>
      <div>
        {cardData.map((item, index) => {
          return (
            <div>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
