import React from 'react';
const Activity = () => {
  return (
    <div className="mt-[36px] md:mt-0  b-white/40 backdrop-blur-sm shadow-lg pb-8 border-[1px] border-[1px] border-slate-200 md:w-1/2 md:ml-2 ">
      <div
        className={
          'h-[52px] border-b-[1px] border-b-slate-200 px-[24px] mb-[16px] flex items-center justify-between'
        }
      >
        <p className="font-bold"> Recent Activity</p>
        <button>view all</button>
      </div>
      <div>
        <ActivityItem />
      </div>
    </div>
  );
};
export default Activity;
const ActivityItem = () => {
  return (
    <div className="flex items-center mx-4">
      <div className="m-0">
        {' '}
        <i className="material-icons icon-s text-red-300">key</i>
      </div>
      <div className="ml-[12px]">
        <h2 className={'font-bold'}>Added a meal</h2>
        <div className="flex mr-[8px] items-center ">
          <p>action by: </p>
          <p className="text-gray-500 font-bold ">Dominicwest7@gmail.com</p>
        </div>
        <div className="flex text-sm">
          <p>Date:</p>
          <p>2022-06-02 at 6pm</p>
        </div>
      </div>
    </div>
  );
};
