import React from 'react';

const ListofPlayers = () => {
  // Using const and let
  const players = [
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 92 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Shreyas Iyer', score: 70 },
    { name: 'Hardik Pandya', score: 60 },
    { name: 'Ravindra Jadeja', score: 76 },
    { name: 'R Ashwin', score: 65 },
    { name: 'Jasprit Bumrah', score: 80 },
    { name: 'Shubman Gill', score: 50 },
    { name: 'Ishan Kishan', score: 90 },
    { name: 'Mohammed Siraj', score: 55 },
  ];

  // Using arrow function to filter
  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
