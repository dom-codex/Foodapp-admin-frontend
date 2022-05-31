import React from 'react';
const Statscard = () => {
  return (
    <div className="w-[95%] mx-auto border-2 border-purple-700 overflow-hidden rounded-md shadow-lg">
      <div className="flex  justify-between items-center h-[100px] bg-purple-500/60 backdrop-blur-sm px-4">
        <div>
          <p className="text-2xl font-bold">200</p>
          <small>Customers</small>
        </div>
        <div className="">
          <i className="material-icons icon ">person</i>
        </div>
      </div>
      <div className="bg-white/1 backdrop-blur-sm h-[62px] flex justify-between items-center px-4">
        <a href="#" className="text-purple-700">
          see more
        </a>
        <span>
          <i className="material-icons text-purple-900">arrow_right</i>
        </span>
      </div>
    </div>
  );
};
export default Statscard;
