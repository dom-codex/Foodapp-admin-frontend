import React from 'react';
import PageLabel from '../components/pagelabel.js';
const Alerts = () => {
  return (
    <section>
      <div>
        <PageLabel label="Alerts" value="200" />
        <div>
          <Tab isNotification={false} />
        </div>
      </div>
    </section>
  );
};
export default Alerts;
const Tab = ({ isNotification }) => {
  const indicatorRight = 'before:translate-x-[100%]';
  const activeBg = 'bg-red-100';
  return (
    <div>
      <div
        className={`flex relative before:absolute before:left-0 before:bottom-0 before:w-1/2 before:border-t-2 before:border-red-500
        before:translate-x-[0%]
        transition transition-1 ${!isNotification && indicatorRight}`}
      >
        <button className={`flex-1 transition-1 ${isNotification && activeBg}`}>
          Notifications
        </button>
        <button
          className={`flex-1 transition transition-1 ${
            !isNotification && activeBg
          }`}
        >
          Activity
        </button>
      </div>
    </div>
  );
};
