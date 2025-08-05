import React from 'react';

function App() {
  // JSX heading element
  const heading = <h1>🏢 Office Space Rental Listings</h1>;

  // Image URL for office space
  const officeImageURL = 'https://via.placeholder.com/600x200?text=Office+Space';

  // Single office object
  const office = {
    name: 'Prestige Towers',
    rent: 75000,
    address: 'MG Road, Bangalore'
  };

  // List of office objects
  const offices = [
    { name: 'Prestige Towers', rent: 75000, address: 'MG Road, Bangalore' },
    { name: 'Skyline Plaza', rent: 55000, address: 'Indiranagar, Bangalore' },
    { name: 'Global Tech Park', rent: 88000, address: 'Whitefield, Bangalore' },
    { name: 'StartHub Space', rent: 48000, address: 'Koramangala, Bangalore' }
  ];

  // Function to determine rent color
  const getRentStyle = (rent) => {
    return {
      color: rent < 60000 ? 'red' : 'green',
      fontWeight: 'bold'
    };
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* Render JSX heading */}
      {heading}

      {/* Render office image */}
      <img src={officeImageURL} alt="Office Space" style={{ width: '100%', marginBottom: '20px' }} />

      {/* Render single office details */}
      <h2>Featured Office</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p><strong>Address:</strong> {office.address}</p>
      <p>
        <strong>Rent:</strong>{' '}
        <span style={getRentStyle(office.rent)}>₹{office.rent}</span>
      </p>

      {/* Loop through office list */}
      <h2>All Available Office Spaces</h2>
      <ul>
        {offices.map((item, index) => (
          <li key={index} style={{ marginBottom: '15px' }}>
            <strong>{item.name}</strong><br />
            {item.address}<br />
            Rent: <span style={getRentStyle(item.rent)}>₹{item.rent}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
