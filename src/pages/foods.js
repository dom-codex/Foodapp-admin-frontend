import React from 'react';
import Category from '../components/category.js';
import MealCard from '../components/mealcard.js';
import FloatingMenu from '../components/floatingmenu.js';
const Foods = () => {
  const foods = [{}, {}, {}];
  const categories = [{}, {}, {}, {}, {}];
  return (
    <section className="pb-4">
      <div className="w-[95%] mx-auto">
        <div className="mb-4">
          <div className="flex justify-between">
            <h2 className="text-[1.65rem] font-bold">Menu</h2>
            {/**floating menu */}
            <div className="relative group ">
              <button className="border-2 border-slate-500 text-slate-600 rounded-md bg-white flex items-center justify-center  w-[90px] p-2 ">
                <i className="material-icons ">add</i>
                <span>Add</span>
              </button>
              <FloatingMenu>
                <li className="p-2 hover:bg-slate-100">category</li>
                <li className="h-[1px] bg-slate-200 "></li>
                <li className="p-2 hover:bg-slate-100">Food</li>
              </FloatingMenu>
            </div>
          </div>
          <div className="text-slate-600">
            <span>Total: </span>
            <span>52 items</span>
          </div>
        </div>
        <div className="sm:flex sm:overflow-y-scroll ">
          <div
            className="overflow-auto whitespace-nowrap mb-6 sm:w-[280px] sm:whitespace-normal sm:overflo
   "
          >
            {categories.map(() => (
              <Category />
            ))}
          </div>
          <div
            className={'grid place-items-center sm:flex-1 sm:overflow-y-scroll'}
          >
            {foods.map(() => (
              <MealCard />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Foods;
