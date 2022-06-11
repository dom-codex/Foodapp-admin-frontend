import React from 'react';

const PageLabel = ({ label, value }) => {
  return (
    <div>
      <h2>{label}</h2>
      <div>
        <span>Total: </span>
        <span>{value}</span>
      </div>
    </div>
  );
};
export default PageLabel;
