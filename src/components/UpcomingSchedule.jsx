import React from 'react';
import '../styles/UpcomingSchedule.css';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import upcomingAppointments from '../data/upcomingAppointments';

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingAppointments.map((day, idx) => (
        <div key={idx}>
          <h4>On {day.day}</h4>
          {day.appointments.map((appt, index) => (
            <SimpleAppointmentCard
              key={index}
              title={appt.title}
              time={appt.time}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;
