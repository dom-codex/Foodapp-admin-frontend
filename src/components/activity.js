import React from "react"
const Activity =()=>{
return <div>
  <div>
    <p>Activity</p>
  </div>
  <div>
    <ActivityItem/>
  </div>
</div>
}
export default Activity;
const ActivityItem=()=>{
  return <div>
    <div> <i className="material-icons">keys</i></div>
    <div>
      <h2>Added a meal</h2>
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