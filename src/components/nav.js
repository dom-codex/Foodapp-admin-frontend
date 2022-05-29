import React from "react"
import foodIcon from "../asset/foodcovered.svg"
const Nav =()=>{
return <heading>
  <nav>
    {/**container for mobile  */}
    <div>
<div>
  <img src={foodIcon}/>
  <h2>Foodie</h2>
</div>
<div>
  <i className="material-icons">dehaze</i>
</div>
    </div>
    {/**container for large screen options */}
    <div></div>
  </nav>
</heading>
}
export default Nav;