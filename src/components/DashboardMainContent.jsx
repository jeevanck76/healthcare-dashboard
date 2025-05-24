import React from 'react';
import '../styles/DashboardMainContent.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

function DashboardMainContent() {
  return (
    <div className="dashboard-main">
      <div className="top-section">
        <AnatomySection />
        <HealthStatusCards />
      </div>
      <CalendarView />
      <UpcomingSchedule />
      <ActivityFeed />
    </div>
  );
}

export default DashboardMainContent;
