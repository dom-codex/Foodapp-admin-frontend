import React from 'react';
import Statscard from '../components/statcard.js';
import Notification from '../components/notification.js';
import Activity from '../components/activity.js';
import MealCard from '../components/mealcard.js';
const Dashboard = () => {
  return (
    <section>
      <div className="w-[95%] mx-auto">
        <div className={'flex mx-auto mb-8'}>
          <div>
            <h2 className="font-bold mb-0 text-[1.5rem]">Welcome Dominic!!!</h2>
            <small className="text-slate-500 mt-0 text-[0.9rem] font-bold ">
              <span>access level:</span>
              <span>Owner</span>
            </small>
          </div>
        </div>
        {/**stats section  */}
        <div className="mb-10">
          <h2
            className="relative  font-bold mb-8 text-[1.6rem] text-slate-700 before:content-[''] 
          before:absolute before:w-[10%] before:h-[2px] before:bg-black before:bottom-0 before:rounded-md "
          >
            Statistics{' '}
          </h2>
          <Statscard />
        </div>
        <div className="mb-10">
          <h2
            className="relative  font-bold mb-8 text-[1.6rem] text-slate-700 before:content-[''] 
          before:absolute before:w-[12%] before:h-[2px] before:bg-black before:-bottom-1 before:rounded-md "
          >
            Popular Meals
          </h2>
          <MealCard />
        </div>
        <div className="mb-10">
          <h2
            className="relative  font-bold mb-6 text-[1.6rem] text-slate-700 before:content-[''] 
          before:absolute before:w-[10%] before:h-[2px] before:bg-black before:bottom-0 before:rounded-md "
          >
            More Stats{' '}
          </h2>
          <Statscard />
        </div>
        <div className="mb-10">
          <h2
            className="relative  font-bold mb-6 text-[1.6rem] text-slate-700 before:content-[''] 
          before:absolute before:w-[15%] before:h-[2px] before:bg-black before:bottom-0 before:rounded-md "
          >
            Notification {'&'} Alert
          </h2>
          <div className="block md:flex md:justify-between ">
            <Notification />
            <Activity />
          </div>
        </div>
        <div className={'mb-6 flex flex-row-reverse'}>
          <button
            className={
              'flex items-center p-2 bg-red-200 border-2 rounded-md text-red-500 border-red-600 font-bold hover:bg-red-500 hover:text-white'
            }
          >
            <span>Logout</span> <i className="material-icons">power</i>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
