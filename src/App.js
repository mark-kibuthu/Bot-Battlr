import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState('health');

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const sortBots = (bots, criterion) => {
    return [...bots].sort((a, b) => b[criterion] - a[criterion]);
  };

  const handleSort = (criterion) => {
    setSortBy(criterion);
  };

  const enlistBot = (bot) => {
    setArmy([...army, bot]);
    setBots(bots.filter(b => b.id !== bot.id));
    setSelectedBot(null);
  };

  const dischargeBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const deleteBot = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, { method: 'DELETE' })
      .then(() => {
        setArmy(army.filter(b => b.id !== id));
        setBots(bots.filter(b => b.id !== id));
      });
  };

  if (selectedBot) {
    return (
      <BotSpecs 
        bot={selectedBot} 
        onBack={() => setSelectedBot(null)} 
        onEnlist={enlistBot} 
      />
    );
  }

  return (
    <div>
      <SortBar onSort={handleSort} />
      <BotCollection bots={sortBots(bots, sortBy)} onSelectBot={setSelectedBot} />
      <YourBotArmy army={army} dischargeBot={dischargeBot} deleteBot={deleteBot} />
    </div>
  );
}

export default App;
