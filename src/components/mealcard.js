import React from 'react';
import { getFoodImageUrl } from '../asset/getimages.js';
const MealCard = () => {
  return (
    <div className="rounded-md shadow-lg bg-white/10 backdrop-blur-sm border-[1px] border-slate-300 w-[320px] mt-4 overflow-hidden inline-block mr-4">
      <div className="relative overflow-hidden max-h-[180px]">
        <img src={getFoodImageUrl()} className="w-fit h-fit" />
        <button className="absolute bottom-[6px] right-[8px] bg-black/40 shadow-sm rounded-sm p-[8px]">
          <i className="material-icons text-slate-200">edit</i>
        </button>
        <p className="absolute top-0 left-0 p-2 bg-black/30 text-white">Foods</p>
      </div>
      <div className="m-4">
        <h2 className="font-bold ">Jollof rice </h2>
        <div className="flex mt-3">
          <p className="text-slate-500 font-bold ">Product Id: </p>
          <p>200701</p>
        </div>
        <div className="flex">
          <p className="text-slate-500 font-bold">Orders: </p>
          <p>200</p>
        </div>
        <div className="flex">
          <p className="text-slate-500 font-bold ">rating: </p>
          <p className="">4.3</p>
        </div>
        <p className="font-bold mt-3">N100,000</p>
      </div>
    </div>
  );
};
export default MealCard;
