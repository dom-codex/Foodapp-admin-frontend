import React from "react"
import Category from "../components/category.js"
import MealCard from "../components/mealcard.js"
const Foods =()=>{
  const foods = [{},{},{}]
return <section className="pb-4">
  <div>
    <div>
      <Category/>
    </div>
    <div className={"grid place-items-center"}>
      {foods.map(()=><MealCard/>)}
    </div>
  </div>
</section>
}
export default Foods