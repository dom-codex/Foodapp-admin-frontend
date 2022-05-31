import React from 'react';
import Statscard from '../components/statcard.js';
import Notification from "../components/notification.js"
const Dashboard = () => {
  return (
    <section>
      <div>
        {/**stats section  */}
        <Statscard />
        <Notification />
      </div>
    </section>
  );
};
export default Dashboard;
