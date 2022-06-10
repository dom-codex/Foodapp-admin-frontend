import React from 'react';
const Customer = ({ name, email, phone }) => {
  return (
    <div className="backdrop-blur-sm rounded-md  w-[220px] shadow-md overflow-hidden ">
      <div className="h-[120px] grid place-items-center bg-slate-300">
        <i className="material-icons icon text-slate-500">person</i>
      </div>
      <div className="px-3 py-6 bg-white/10 backdrop-blur-sm">
        <Details title={'name'} value={name} />
        <Details title={'email'} value={email} />
        <Details title={'phone'} value={phone} />
        <Details title="Status" value="VERIFIED" />
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
