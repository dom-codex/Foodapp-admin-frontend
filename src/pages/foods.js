import React from "react"
import Category from "../components/category.js"
import MealCard from "../components/mealcard.js"
import FloatingMenu from "../components/floatingmenu.js"
const Foods =()=>{
  const foods = [{},{},{}]
  const categories = [{},{},{},{},{}]
return <section className="pb-4">
  <div className="w-[95%] mx-auto">
    <div className="mb-4">
      <div>
      <h2 className="text-[1.65rem] font-bold">Menu</h2>
      {/**floating menu */}
      <div className="relative ">
        <FloatingMenu>
          <li>category</li>
          <li>Food</li>
          </FloatingMenu>
      </div>
      </div>
      <div className="text-slate-600">
        <span>Total: </span>
        <span>52 items</span>
      </div>
    </div>
    <div className="overflow-auto whitespace-nowrap mb-6">
      {categories.map(()=><Category/>)}
    </div>
    <div className={"grid place-items-center"}>
      {foods.map(()=><MealCard/>)}
    </div>
  </div>
</section>
}
export default Foods