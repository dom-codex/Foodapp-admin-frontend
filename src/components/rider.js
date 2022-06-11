import React from 'react';

const Rider = () => {
  return (
    <div className="p-6 bg-white/5 backdrop-blur-sm shadow-md w-[80%] mx-auto">
      <div className="flex justify-between">
        <img
          className="h-[50px] w-[50px] rounded-[12px] border-2 border-slate-500"
          src={
            'https://raw.githubusercontent.com/dom-codex/Foodapp-admin-frontend/develop/src/asset/jollofrice.jpeg'
          }
          alt={'rider picture'}
        />
        <div>
          <small>Rider Id:</small>
          <p>0021456</p>
        </div>
      </div>
      <div className="my-6 text-slate-600">
        <p className="font-bold text-[1.3rem]">DOMINIC WEST</p>
        <p>DOM@gmail.com</p>
        <p>08101063084</p>
      </div>
      <div className="mb-4 bg-black/10   backdrop-blur-md py-6 text-center rounded-md">
        <p className="text-[1.2rem] font-bold text-slate-600">
          Total Deliveries
        </p>
        <p className="font-bold text-slate-700">200</p>
      </div>
      <div className="mt-4 text-center">
        <button className="text-slate-700">View Location</button>
      </div>
    </div>
  );
};
export default Rider;
