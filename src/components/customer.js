import React from "react"
const Customer =({name,email,phone})=>{
  return <div className="bg-white/20 backdrop-blur-sm border-2 border-slate-300 rounded-md shadow-md ">
    <div>
      <i className="material-icons">person</i>
    </div>
    <div>
      <Details title={"name"} value={name}/>
      <Details title={"email"} value={email}/>
      <Details title={"phone"} value={phone}/>
    </div>
  </div>
}
export default Customer;

const Details =({title, value})=>{
  return <div>
    <p>{title}</p>
    <p>{value}</p>
  </div>
}