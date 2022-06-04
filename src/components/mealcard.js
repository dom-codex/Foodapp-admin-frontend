import React from 'react';
import { getFoodImageUrl } from '../asset/getimages.js';
const MealCard = () => {
  return (
    <div className="rounded-md shadow-md bg-white/10 backdrop-blur-sm border-[1px] border-slate-100 w-[95%] mx-auto mt-4 overflow-hidden">
      <div className="relative overflow-hidden max-h-[180px]">
        <img src={getFoodImageUrl()} className="w-fit h-fit" />
        <button className="absolute bottom-[6px] right-[8px] bg-black/40 shadow-sm rounded-sm p-[8px]">
          <i className="material-icons text-slate-200">edit</i>
        </button>
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
      </div>
    </div>
  );
};
export default MealCard;
