import  { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [selectedBots, setSelectedBots] = useState([]);

  const addToArmy = (bot) => {
    setSelectedBots((prevSelectedBots) => [...prevSelectedBots, bot]);
  };


  
  const releaseFromArmy = (botId) => {
    setSelectedBots((prevSelectedBots) =>
      prevSelectedBots.filter((bot) => bot.id !== botId)
    );
  };

  return (
    <div>
      <YourBotArmy selectedBots={selectedBots}  releaseFromArmy={releaseFromArmy} />

      <BotCollection  addToArmy={addToArmy} />

    </div>
  );
}

export default BotsPage;