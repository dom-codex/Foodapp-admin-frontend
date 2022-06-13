import React from 'react';
import PageLabel from '../components/pagelabel.js';
import { getFoodImageUrl } from '../asset/getimages.js';
const Orders = () => {
  const orders = [{}, {}, {}];
  return (
    <section>
      <div className="w-[95%] mx-auto">
        <div>
          <PageLabel label="Live Orders" value="10" />
        </div>
        <div className="mt-6 sm:grid sm:grid-cols-[repeat(2,1fr)] gap-3">
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
    <div className="p-4 border-2 border-gray-100 rounded-md shadow-md my-3">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold">Purchased Items</p>
          <p className="text-slate-500 font-bold">$200.78</p>
          <div className="flex items-center">
            <p className="font-bold text-slate-600">Status: </p>
            <small className="ml-2 bg-orange-200 p-1 px-3 rounded-lg font-bold">
              Placed
            </small>
          </div>
        </div>
        <div>
          <p className="font-bold">
            Order #: <span className="text-slate-600"> 000001203</span>
          </p>
          <p className="font-bold">
            Customer:{' '}
            <span className="text-slate-600">domininic@gmail.com</span>
          </p>
          <div className="flex">
            <p className="font-bold">Payment method:</p>
            <p className="text-slate-600 font-bold">On-delivery</p>
          </div>
        </div>
      </div>
      <div className="whitespace-nowrap overflow-auto  my-6">
        <OrderItemImg />
        <OrderItemImg />
        <OrderItemImg />
      </div>
      <div className="flex flex-row-reverse items-center">
        <button className="flex items-center justify-center  border-2 border-yellow-500 px-3 py-2 rounded-md text-yellow-600 font-bold hover:bg-yellow-600 hover:text-white">
          <i className="material-icons"></i>
          print
        </button>
        <button className="flex items-center justify-center mr-4 border-2 border-red-500 px-3 py-2 rounded-md text-red-600 font-bold hover:bg-red-600 hover:text-white">
          <i className="material-icons">clear</i>
          cancel order
        </button>
        <button className="flex items-center justify-center mr-4 border-2 border-green-500 px-3 py-2 rounded-md text-green-600 font-bold hover:bg-green-600 hover:text-white">
          <i className="material-icons">arrow_right</i>
          dispatch
        </button>
      </div>
    </div>
  );
};
const OrderItemImg = () => {
  return (
    <div className="shadow-md mb-6 inline-block mx-2">
      <div className="overflow-hidden h-[160px] w-[180px] rounded-tr-md rounded-tl-md">
        <img className="w-full h-full" src={getFoodImageUrl()} />
      </div>
      <div className="bg-white p-3">
        <p className="font-bold mb-2">Jollof Rice</p>
        <p className="text-[0.9rem]">
          <span>UnitPrice: </span>
          <span className="font-bold">$50</span>
        </p>
        <p className="text-[0.9rem]">
          <span>Quantity: </span>
          <span className="font-bold">02</span>
        </p>
      </div>
    </div>
  );
};
