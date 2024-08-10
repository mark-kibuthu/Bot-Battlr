import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, onSelectBot }) {
  return (
    <div>
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} onSelect={onSelectBot} />
      ))}
    </div>
  );
}

export default BotCollection;
