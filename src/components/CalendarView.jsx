import React from 'react';
import '../styles/CalendarView.css';
import calendarAppointments from '../data/calendarAppointments';

function CalendarView() {
  return (
    <div className="calendar-view">
      <h3>October 2021</h3>
      <div className="calendar-grid">
        {["09:00", "11:00", "13:00", "15:00"].map((time, idx) => (
          <div key={idx}>{time}</div>
        ))}
      </div>

      <div className="appointment-cards">
        {calendarAppointments.map((appt, idx) => (
          <div className="appointment" key={idx}>
            {appt.title} - {appt.time}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;
