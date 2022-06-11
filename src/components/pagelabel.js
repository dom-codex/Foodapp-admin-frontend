import React from 'react';

const PageLabel = ({ label, value }) => {
  return (
    <div>
      <h2 className="text-[1.35rem] fonr-bold text-slate-600">{label}</h2>
      <div>
        <span>Total: </span>
        <span className="font-bold">{value}</span>
      </div>
    </div>
  );
};
export default PageLabel;
