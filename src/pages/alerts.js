import React from 'react';
import PageLabel from '../components/pagelabel.js';
const Alert = () => {
  return (
    <section>
      <div>
        <PageLabel label="Alerts" value="200" />
        <div></div>
      </div>
    </section>
  );
};
export default Alert;
const Tab = () => {
  return (
    <div>
      <div>
        <button>Notifications</button>
        <button>Activity</button>
      </div>
    </div>
  );
};
