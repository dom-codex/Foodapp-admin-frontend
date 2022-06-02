import React from "react"
const Activity =()=>{
return <div>
  <div className={"h-[32px] border-b-sm"}>
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
    <div>
      <h2 className={"font-bold"}>Added a meal</h2>
      <div>
        <p>action by</p>
        <p>Dominicwest7@gmail.com</p>
      </div>
      <div>
        <p>Date:</p>
        <p>2022-06-02 at 6pm</p>
      </div>
    </div>
  </div>
}