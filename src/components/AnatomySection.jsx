import React from 'react';
import '../styles/AnatomySection.css';
import data from '../data/healthData';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <img
  src="https://i.pinimg.com/564x/75/68/a9/7568a90f5799ed35d993900454c0c884.jpg"
  alt="Human Body Anatomy Diagram"
/>

      <ul>
        {data.map((item, idx) => (
          <li key={idx} style={{ color: item.color }}>
            {item.organ}: {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnatomySection;
