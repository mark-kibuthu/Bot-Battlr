import React from 'react';

function BotCard({ bot, onSelect }) {
  return (
    <div>
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} />
      <button onClick={() => onSelect(bot)}>View Details</button>
    </div>
  );
}

export default BotCard;
