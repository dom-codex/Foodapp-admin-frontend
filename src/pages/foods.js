import React from "react"
import Category from "../components/category.js"
import MealCard from "../components/mealcard.js"
const Foods =()=>{
  const foods = [{},{},{}]
  const categories = [{},{},{},{},{}]
return <section className="pb-4">
  <div>
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