import React from 'react';
import '../styles/HealthStatusCards.css';

function HealthStatusCards() {
  const cards = [
    { organ: 'Lungs', status: 'Critical', date: 'May 24' },
    { organ: 'Teeth', status: 'Good', date: 'May 22' },
    { organ: 'Bone', status: 'Healthy', date: 'May 20' },
  ];

  return (
    <div className="health-cards">
      {cards.map((card, idx) => (
        <div key={idx} className="card">
          <h4>{card.organ}</h4>
          <p>Status: {card.status}</p>
          <p>Date: {card.date}</p>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
