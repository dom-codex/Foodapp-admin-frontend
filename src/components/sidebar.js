import React from 'react';
const Sidebar = () => {
  const data= [{title:"Dashboard",path:"/dashboard",icon:"dashboard"}]
  return (
    <aside>
      <div>
{data.map((data,i)=>{
  return <SideItem data={data}/>
})}
      </div>
    </aside>
  );
};
export default Sidebar;
const SideItem=({data:{icon,path,title}})=>{
  return <div>
    <i className="material-icons">{icon}</i>
    <a href={path}>{title}</a>
  </div>
}