import React from 'react';
import PageLabel from '../components/pagelabel.js';
import Rider from '../components/rider.js';
const Riders = () => {
  return (
    <section>
      <div className="w-[95%] mx-auto">
      <div className="flex items-center justify-between ">
        <PageLabel label="Riders" value="01" />
        <button className="flex items-center border-2 border-slate-600 w-[85px] p-2 bg-white rounded-md text-slate-500"><i className="material-icons ">add</i> New</button>
        </div>
        <div className="mt-6">
          <Rider />
        </div>
      </div>
    </section>
  );
};
export default Riders;
