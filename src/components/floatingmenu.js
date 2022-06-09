import React from "react"
const FloatingMenu=({children})=>{
return <div className="absolute top-[100%] right-0 bg-white shadow-md min-h-[80px] min-w-[140px] rounded-sm hidden group-hover:block">
  <ul>
    {children}
  </ul>
</div>
}    
export default FloatingMenu