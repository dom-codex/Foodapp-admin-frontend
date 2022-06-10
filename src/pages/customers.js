import React from 'react';
import SearchBar from '../components/searchbar.js';
import Customer from '../components/customer.js';
const Customers = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            <h2>Customers</h2>
            <div>
              <span>Total</span>
              <small>300</small>
            </div>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
        <div>
          <Customer name="dominic" email="dom@gmail.com" phone="08101063084" />
        </div>
      </div>
    </section>
  );
};
export default Customers;
