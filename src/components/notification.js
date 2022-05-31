import React from "react"
const Notification =()=>{
return <div>
  <div>
    <div><p>Notifications</p></div>
    <button>mark all as read</button>
  </div>
  <div>
    <i className ={"material-icons "}>notifications</i>
    <div>
      <h3>New complaint Email</h3>
      <div>
        <span>sender:</span>
        <button>dominic@gmail.com</button>
      </div>
      <small>Mon, jan 29 2023,2:30am </small>
    </div>
  </div>
</div>
}
export default Notification