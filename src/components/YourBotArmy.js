import React from 'react';

function YourBotArmy({ army, dischargeBot, deleteBot }) {
  return (
    <div>
      {army.map(bot => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <button onClick={() => dischargeBot(bot)}>Discharge</button>
          <button onClick={() => deleteBot(bot.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
