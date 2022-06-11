import React from 'react';
const Customer = ({ name, email, phone }) => {
  return (
    <div className="backdrop-blur-sm rounded-md  w-[220px] shadow-md overflow-hidden ">
      <div className="h-[120px] grid place-items-center bg-slate-300">
        <i className="material-icons icon text-slate-500">person</i>
      </div>
      <div className="px-3 py-4 bg-white/10 backdrop-blur-sm">
        <Details title={'name'} value={name} />
        <Details title={'email'} value={email} />
        <Details title={'phone'} value={phone} />
        <Details title="Status" value="VERIFIED" />
      </div>
      <div className="flex border-[1px] border-slate-400 rounded-bl-md rounded-br-md">
        <button className="flex p-2 flex-1 items-center  ">
          <span>Send Email</span>
          <i className="material-icons text-slate-400">mail</i>
        </button>
        <button className="flex-1 bg-slate-300"> suspend</button>
      </div>
    </div>
  );
};
export default Customer;

const Details = ({ title, value }) => {
  return (
    <div className="flex mb-3">
      <p className="mr-2 text-slate-900 ">{title}: </p>
      <p className="text-gray-600 font-bold">{value}</p>
    </div>
  );
};
