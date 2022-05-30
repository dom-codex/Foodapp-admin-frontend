import React from "react"
import Nav from "./components/nav.js"
import Sidebar from "./components/sidebar.js"
const LayoutFrame=()=>{
return <section className={"mainbg block h-screen"}>
    <Nav/>
    <div className="pt-[68px]">
      <div><Sidebar/></div>
    </div>
</section>
}
export default LayoutFrame;