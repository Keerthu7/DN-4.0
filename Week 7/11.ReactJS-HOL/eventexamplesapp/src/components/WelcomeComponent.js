import React from 'react';

function WelcomeComponent() {
  const sayWelcome = (message) => {
    alert(message);
  };

  return (
    <div>
      <button onClick={() => sayWelcome("Welcome to the React Lab!")}>
        Say Welcome
      </button>
    </div>
  );
}

export default WelcomeComponent;
