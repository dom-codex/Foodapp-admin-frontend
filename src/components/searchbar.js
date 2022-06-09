import React from 'react';
const SearchBar = () => {
  return (
    <div className="relative h-[42px] overflow-hidden rounded-[42px] mb-3 inline-flex">
      <input
        type={'text'}
        placeholder="meal e.g rice"
        className="h-full bg-slate-200 px-4 outline-none"
      />
      <button className="text-color-500 bg-slate-300 absolute h-[30px] w-[30px] rounded-[15px] top-[6px] right-[8px] grid place-items-center">
        <i className="material-icons">search</i>
      </button>
    </div>
  );
};
export default SearchBar;
