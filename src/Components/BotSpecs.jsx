import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [selectedBots, setSelectedBots] = useState([]);
  const [enlistedClasses, setEnlistedClasses] = useState([]);

  const addToArmy = (bot) => {
    if (!enlistedClasses.includes(bot.bot_class)) {
      setSelectedBots((prevSelectedBots) => [...prevSelectedBots, bot]);
      setEnlistedClasses([...enlistedClasses, bot.bot_class]);
    }
  };

  const releaseFromArmy = (botId) => {
    setSelectedBots((prevSelectedBots) => prevSelectedBots.filter((bot) => bot.id !== botId));
  };

  return (
    <div>
      <YourBotArmy selectedBots={selectedBots} releaseFromArmy={releaseFromArmy} />
      <BotCollection addToArmy={addToArmy} />
    </div>
  );
}

export default BotsPage;
