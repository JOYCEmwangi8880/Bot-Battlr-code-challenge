import React from "react";

function BotStats({ health, armor, damage }) {
  return (
    <div className="bot-stats">
      <div className="bot-stats-labels">
        <p>Health:</p>
        <p>Armor:</p>
        <p>Damage:</p>
      </div>
      <div className="bot-stats-values">
        <div>{health}</div>
        <div>{armor}</div>
        <div>{damage}</div>
      </div>
    </div>
  );
}

export default BotStats;