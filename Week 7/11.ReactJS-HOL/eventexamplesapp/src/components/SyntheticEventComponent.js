import React from 'react';

function SyntheticEventComponent() {
  const handleClick = (event) => {
    event.preventDefault(); // SyntheticEvent example
    alert("I was clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>OnPress</button>
    </div>
  );
}

export default SyntheticEventComponent;
