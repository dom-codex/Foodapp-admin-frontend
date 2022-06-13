import React from 'react';
import PageLabel from '../components/pagelabel.js';
const OrderHistory = () => {
  return (
    <section>
      <div>
        <PageLabel label="OrderHistory" value={24} />
        <div>
          <OrderHeader />
          <OrderBody />
        </div>
      </div>
    </section>
  );
};
export default OrderHistory;
const OrderItem = () => {
  return (
    <div className="grid grid-cols-[repeat(6,1fr)]">
      <div>
        <p>000001</p>
      </div>
      <div>
        <p>13/06/2022</p>
      </div>
      <div>
        <p>dom@gmail.com</p>
      </div>
      <div>
        <p>$200.56</p>
      </div>
      <div>
        <p>Processing</p>
      </div>
      <div className="flex items-center">
        <button>View order</button>
        <button className="ml-6">
          <i className="material-icons">clear</i>
        </button>
      </div>
    </div>
  );
};
const OrderBody = () => {
  const orders = [{}, {}, {}];
  return (
    <div className="mt-3">
      {orders.map(() => (
        <OrderItem />
      ))}
    </div>
  );
};
const OrderHeader = () => {
  return (
    <div className="grid grid-cols-[repeat(6,1fr)] ">
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
