import React from 'react';
import Statscard from '../components/statcard.js';
import Notification from "../components/notification.js"
import Activity from "../components/activity.js"
const Dashboard = () => {
  return (
    <section>
      <div>
        {/**stats section  */}
        <Statscard />
        <Notification />
        <Activity/>
      </div>
    </section>
  );
};
export default Dashboard;
