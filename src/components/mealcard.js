import React from "react"

const MealCard=()=>{
return <div>
  <div>
<img src={"../asset/jollofrice.jpg"}/>
<button><i className="material-icons">edit</i></button>
  </div>
  <div>
    <h2>Jollof rice </h2>
    <div>
      <p>Product Id: </p>
      <p>200701</p>
    </div>
    <p>N100,000</p>
    <div>
      <p>rating</p>
      <p>4.3</p>
    </div>
  </div>
</div>
}
export default MealCard;