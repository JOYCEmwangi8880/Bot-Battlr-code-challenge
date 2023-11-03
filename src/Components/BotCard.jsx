import React from "react";

function BotCard({ bot }) {
  return (
    <div className="bot-container">
      <div className="bot-card" key={bot.id} onClick={() => console.log("add code to connect event listener")}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
          </div>
          <div className="meta">
            {bot.catchphrase}
          </div>
        </div>
        <div className="extra">
          <span>
            {bot.health}
          </span>
          <span>
            {bot.damage}
          </span>
          <span>
            {bot.armor}
          </span>
          <div className="center-aligned-segment">
            <button className="mini-button" onClick={() => console.log("add code to connect event listener")}>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
