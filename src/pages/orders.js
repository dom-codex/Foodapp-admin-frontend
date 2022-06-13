import React from 'react';
import PageLabel from '../components/pagelabel.js';
const Orders = () => {
  const orders = [{}, {}, {}];
  return (
    <section>
      <div>
        <div>
          <PageLabel label="Live Orders" value="10" />
        </div>
        <div className="mt-6">
          {orders.map(() => (
            <OrderItem />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Orders;
const OrderItem = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold">Purchased Items</p>
          <p className="text-slate-500 font-bold">$200.78</p>
          <div className="flex">
            <p>Status: </p> 
            <p>Placed</p>
          </div>
        </div>
        <div>
          <p>Order # 000001203</p>
          <p>
            Customer <span>domininic@gmail.com</span>
          </p>
          <div>
            <p>Payment method</p>
            <p>On-delivery</p>
          </div>
        </div>
      </div>
      <div className="whitespace-nowrap overflow-x-scroll"></div>
      <div>
        <button>
          <i className="material-icons"></i>
          print
        </button>
        <button>
          <i className="material-icons">clear</i>
          cancel order
        </button>
        <button>
          <i className="material-icons">arrow_right</i>
          dispatch
        </button>
      </div>
    </div>
  );
};
