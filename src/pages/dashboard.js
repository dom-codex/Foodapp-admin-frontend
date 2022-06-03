import React from 'react';
import Statscard from '../components/statcard.js';
import Notification from "../components/notification.js"
import Activity from "../components/activity.js"
import MealCard from "../components/mealcard.js"
const Dashboard = () => {
  return (
    <section>
      <div>
        {/**stats section  */}
        <Statscard />
        <MealCard/>
        <Notification />
        <Activity/>
      </div>
    </section>
  );
};
export default Dashboard;
