import React from "react"
const FloatingMenu=({children})=>{
return <div className="absolute top-[100%] right-0 bg-white shadow-md">
  <ul>
    {children}
  </ul>
</div>
}    
export default FloatingMenu