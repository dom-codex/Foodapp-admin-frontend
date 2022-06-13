import React from 'react';
import PageLabel from '../components/pagelabel.js';
const OrderHistory = () => {
  return (
    <section>
      <div>
        <PageLabel label="OrderHistory" value={24} />
        <div>
          <OrderHeader />
        </div>
      </div>
    </section>
  );
};
export default OrderHistory;
const OrderHeader = () => {
  return (
    <div className="grid grid-cols-[repeat(6,1fr) ">
      <div>
        <p>Order #</p>
      </div>
      <div>
        <p>Date</p>
      </div>
      <div>
        <p>Customer</p>
      </div>
      <div>
        <p>Total</p>
      </div>
      <div>
        <p>Status</p>
      </div>
      <div>
        <p>Actions</p>
      </div>
    </div>
  );
};
