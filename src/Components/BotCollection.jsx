import React, { useState, useEffect } from "react";
import SortBar from "./SortBar";

function BotCollection({ addToArmy }) {
  const [allBotsData, setAllBotsData] = useState([]);
  const [sortOption, setSortOption] = useState("health"); // Default sorting by health

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setAllBotsData(data))
      .catch((e) => console.log(e));
  }, []);

  const handleAddToArmy = (bot) => {
    addToArmy(bot);
  };

  const handleDeleteBot = (botId) => {
    console.log("Deleting bot with ID:", botId);
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log("Response status:", res.status);
        if (res.status === 204) {
          console.log("Bot deleted successfully.");
          setAllBotsData((prevData) => prevData.filter((bot) => bot.id !== botId));
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleSort = (option) => {
    setSortOption(option);
  };

  const sortedBots = allBotsData.slice().sort((botA, botB) => {
    if (sortOption === "health") {
      return botB.health - botA.health;
    } else if (sortOption === "damage") {
      return botB.damage - botA.damage;
    } else {
      return botB.armor - botA.armor;
    }
  });

  return (
    <div className="bot-collection-container">
      <SortBar onSort={handleSort} />

      <div className="all-bots-container">
        {sortedBots.map(({ id, name, health, damage, armor, bot_class, catchphrase, avatar_url }) => {
          return (
            <div className={`bot-container ${bot_class}`} key={id} onClick={() => handleAddToArmy({ id, name, health, damage, armor, bot_class, catchphrase, avatar_url })}>
              <div className="img-div">
                <img src={avatar_url} alt={name} width="100" height="100" />
              </div>
              <p className="bot-name">{name}</p>
              <p>{catchphrase}</p>
              <div className="bot-container-footer">
                <div>{health}</div>
                <div>{damage}</div>
                <div>{armor}</div>
              </div>
              <button className='red-delete' onClick={() => handleDeleteBot(id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BotCollection;
