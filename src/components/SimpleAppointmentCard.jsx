import React from 'react';
import '../styles/SimpleAppointmentCard.css';

function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="appointment-card">
      <span className="dot">•</span>
      <span>{title} at {time}</span>
    </div>
  );
}

export default SimpleAppointmentCard;
