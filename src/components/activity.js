import React from "react"
const Activity =()=>{
return <div className="mx-auto mt-[36px] w-[95%]">
  <div className={"h-[32px] border-b-[1px] border-b-slate-200 pl-[24px] mb-[16px]"}>
    <p>Activity</p>
  </div>
  <div>
    <ActivityItem/>
  </div>
</div>
}
export default Activity;
const ActivityItem=()=>{
  return <div className="flex items-center">
    <div className="m-0"> <i className="material-icons icon-s">key</i></div>
    <div className="ml-[16px]">
      <h2 className={"font-bold"}>Added a meal</h2>
      <div className="flex mr-[8px]">
        <p>action by: </p>
        <p className="text-gray-500">Dominicwest7@gmail.com</p>
      </div>
      <div>
        <p>Date:</p>
        <p>2022-06-02 at 6pm</p>
      </div>
    </div>
  </div>
}