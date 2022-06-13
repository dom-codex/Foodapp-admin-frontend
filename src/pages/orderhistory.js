import React from 'react';
import PageLabel from '../components/pagelabel.js';
const OrderHistory = () => {
  return (
    <section className="overflow-hidden">
      <div className="pt-6 w-[95%] mx-auto">
        <PageLabel label="OrderHistory" value={24} />
        <div className="overflow-x-scroll whitespace-nowrap mt-6 border-2 border-slate-300 p-4 rounded-md">
          <OrderHeader />
          <OrderBody />
        </div>
      </div>
    </section>
  );
};
export default OrderHistory;
const OrderItemField = ({ value, extras, underline = false }) => {
  return (
    <div className="w-[140px] break-words whitespace-normal">
      <p
        className={`${
          underline ? 'underline' : ''
        } break-words hover:font-bold ${extras}`}
      >
        {value}
      </p>
    </div>
  );
};
const OrderItem = () => {
  return (
    <div className="grid grid-cols-[repeat(6,1fr)] gap-4">
      <OrderItemField value={'00001'} />
      <OrderItemField value={'13 / 06 / 2022'} />
      <OrderItemField underline={true} value="dom@gmail.com" />
      <OrderItemField value="$200.56" />
      <OrderItemField value="Processing" />
      <div className="flex items-center w-[100px]">
        <button className="text-sky-700 hover:font-bold hover:underline">
          View order
        </button>
        <button className="ml-6 text-red-500 hover:text-[1.1rem]">
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
    <div className="grid grid-cols-[repeat(6,1fr)] gap-4 border-b-2 border-slate-300 pb-4 ">
      <OrderItemField value="Order #" extras="font-bold text-slate-700" />
      <OrderItemField value="Date" extras="font-bold text-slate-700" />
      <OrderItemField value="Customer" extras="font-bold text-slate-700" />
      <OrderItemField value="Total" extras="font-bold text-slate-700" />
      <OrderItemField value="Status" extras="font-bold text-slate-700" />
      <OrderItemField value="Actions" extras="font-bold text-slate-700" />
    </div>
  );
};
