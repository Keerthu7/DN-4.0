import React from 'react';

const IndianPlayers = () => {
  // Odd and Even teams
  const oddTeam = ['Player1', 'Player3', 'Player5'];
  const evenTeam = ['Player2', 'Player4', 'Player6'];

  // Destructuring
  const [odd1, odd2, odd3] = oddTeam;
  const [even1, even2, even3] = evenTeam;

  // Merging arrays
  const T20Players = ['Virat', 'Rohit', 'Surya'];
  const RanjiPlayers = ['Prithvi', 'Shaw', 'Sarfaraz'];
  const allPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
      </ul>

      <h2>All Players (T20 + Ranji)</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
