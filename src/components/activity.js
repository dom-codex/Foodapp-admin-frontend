import React from "react"
const Activity =()=>{
return <div className="mx-auto mt-[36px] w-[95%] b-white/40 backdrop-blur-sm shadow-lg pb-8">
  <div className={"h-[52px] border-b-[1px] border-b-slate-200 px-[24px] mb-[16px] flex items-center justify-between"}>
    <p className="font-bold">Activity</p>
    <button>view all</button>
  </div>
  <div>
    <ActivityItem/>
  </div>
</div>
}
export default Activity;
const ActivityItem=()=>{
  return <div className="flex items-center">
    <div className="m-0"> <i className="material-icons icon-s text-red-300">key</i></div>
    <div className="ml-[16px]">
      <h2 className={"font-bold"}>Added a meal</h2>
      <div className="flex mr-[8px]">
        <p>action by: </p>
        <p className="text-gray-500 font-bold ">Dominicwest7@gmail.com</p>
      </div>
      <div className="flex text-sm">
        <p>Date:</p>
        <p>2022-06-02 at 6pm</p>
      </div>
    </div>
  </div>
}