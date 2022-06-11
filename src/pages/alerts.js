import React, { useState } from 'react';
import PageLabel from '../components/pagelabel.js';
import NavContainer from "../components/navcontainer.js"
import ActivityContainer from "../components/activitycontainer.js"
const Alerts = () => {
  const [tabToggle, toggler] = useState(true);
  return (
    <section>
      <div>
        <PageLabel label="Alerts" value="200" />
        <div>
          <Tab isNotification={tabToggle} toggler={toggler} />
          {tabToggle?<NavContainer/>:<ActivityContainer/>}
        </div>
      </div>
    </section>
  );
};
export default Alerts;
const Tab = ({ isNotification, toggler }) => {
  const indicatorRight = 'before:translate-x-[100%]';
  const activeBg = 'bg-red-100';
  const setToggler = (value) => {
    toggler(value);
  };
  return (
    <div>
      <div
        className={`flex relative before:absolute before:left-0 before:bottom-0 before:w-1/2 before:border-t-2 before:border-red-500
        before:translate-x-[0%]
        before:transition before:duration-500 ${
          !isNotification && indicatorRight
        }`}
      >
        <button
          onClick={() => setToggler(true)}
          className={`flex-1 transition duration-500 py-4 ${
            isNotification && activeBg
          }`}
        >
          Notifications
        </button>
        <button
          onClick={() => setToggler(false)}
          className={`flex-1 transition duration-500 py-4 ${
            !isNotification && activeBg
          }`}
        >
          Activity
        </button>
      </div>
    </div>
  );
};
