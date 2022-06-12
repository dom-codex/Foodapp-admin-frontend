import React from 'react';

const NavContainer = () => {
  const notification =[{},{},{}]
  return <div className="translate-x-[-100%] animate-slideIn pt-4">
    {notification.map(()=><Item/>)}
  </div>;
};
export default NavContainer;
const Item =()=>{
  return <div className="flex bg-white  items-center w-[95%] mx-auto shadow-md mb-3 p-4 rounded-md">
    <div className="mr-2" >
      <i className="material-icons">notifications </i>
    </div>
    <div>
      <p className="text-[1.3rem] font-bold ">New Complaint Email</p>
      <p className="text-slate-600 font-bold">
        <span>From: </span>
        <span>dom@gmail.com </span>
      </p>
      <p className="text-slate-400 font-bold ">
      <span>sent</span>
      <span>Mon 13 jan,2022 3:54pm</span>
      </p>
    </div>
  </div>
}
