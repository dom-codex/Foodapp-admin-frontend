import React from 'react';
import SearchBar from '../components/searchbar.js';
import Customer from '../components/customer.js';
const Customers = () => {
  return (
    <section>
      <div className="w-[95%] mx-auto">
        <div>
          <div>
            <h2 className="text-[1.35rem] text-slate-600 font-bold">
              Customers
            </h2>
            <div className="text-[1.05rem]">
              <span>Total: </span> 
              <small className="font-bold">300</small>
            </div>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
        <div>
          <Customer
            name="dominic"
            email="domrkhgshhvfjhdfgjhdfjdghdfjhfdjgfdjghffhfjhfgjffhjh@gmail.com"
            phone="08101063084"
          />
        </div>
      </div>
    </section>
  );
};
export default Customers;
