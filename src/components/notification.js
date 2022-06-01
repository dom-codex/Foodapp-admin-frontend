import React from "react"
const Notification =()=>{
return <div>
  <div className="flex justify-between items-center  px-2 h-[48px]">
    <p className="font-bold relative  
    after:absolute after:top-[10px] after:-right-[10px] after:h-[6px] after:w-[6px] after:bg-black after:content-[''] after:rounded-md">Notifications</p>
    <button className="text-sm text-gray-700">mark all as read</button>
  </div>
  <div className="flex items-center">
    <i className ={"material-icons icon "}>notifications</i>
    <div>
      <h3 className="font-bold">New complaint Email</h3>
      <div className="text-gray-500">
        <span>sender:</span>
        <button className="text-gray-700 underline">dominic@gmail.com</button>
      </div>
      <small className="text-gray-700">Mon, jan 29 2023,2:30am </small>
    </div>
  </div>
</div>
}
export default Notification