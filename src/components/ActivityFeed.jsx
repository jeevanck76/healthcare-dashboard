import React from 'react';
import '../styles/ActivityFeed.css';

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <p>3 appointments on this week</p>
      <div className="chart">
        <div className="bar" style={{ height: '60%' }}></div>
        <div className="bar" style={{ height: '80%' }}></div>
        <div className="bar" style={{ height: '40%' }}></div>
        <div className="bar" style={{ height: '70%' }}></div>
      </div>
    </div>
  );
}

export default ActivityFeed;
