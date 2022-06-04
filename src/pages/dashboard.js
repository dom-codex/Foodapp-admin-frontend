import React from 'react';
import Statscard from '../components/statcard.js';
import Notification from "../components/notification.js"
import Activity from "../components/activity.js"
import MealCard from "../components/mealcard.js"
const Dashboard = () => {
  return (
    <section>
      <div>
        <div className={"flex w-[95%] mx-auto mb-8"}>
          <div>
            <h2 className="font-bold mb-0">Welcome Dominic!!!</h2>
            <small className="text-slate-900 mt-0">
              <span>access level:</span>
              <span>Owner</span>
            </small>
          </div>
        </div>
        {/**stats section  */}
        <div>
        <Statscard />
        </div>
        <MealCard/>
        <Notification />
        <Activity/>
      </div>
    </section>
  );
};
export default Dashboard;
