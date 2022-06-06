import React from 'react';
const Sidebar = ({canOpen, sliderToggle}) => {
  const ztoggle=`${canOpen?"animate-zin":"animate-zout"}`

  const opacitytoggle=`${canOpen?"animate-oin":"animate-out"}`

  const slidetoggle = `${canOpen?"animate-slideIn":"animate-slideOut"}`
  const data = [{ title: 'Dashboard', path: '#', icon: 'dashboard' }, {title:"Notification ", path:"",icon:"notifications"}];
  return (
    <aside className={`fixed top-[0px] left-0 w-screen h-screen   ${ztoggle} `}>
    <div  className={`w-full h-full bg-black/5 backdrop-blur-sm ${opacitytoggle}`} onClick={()=>sliderToggle(false)}>
      <div className={`bg-white w-1/2 h-full overflow-hidden ${slidetoggle}`}>
        {data.map((data, i) => {
          return <SideItem data={data} />;
        })}
      </div>
    </div>
    </aside>
  );
};
export default Sidebar;
const SideItem = ({ data: { icon, path, title } }) => {
  return (
    <div className="group relative  border-b-2 hover:bg-orange-500 h-14">
      <div
        className={
          'bg-white flex items-center p-2 transition-all group-hover:translate-x-4 group-hover:absolute w-full h-full top-0 left-0' 
        }
      >
        <i className="material-icons">{icon}</i>
        <a href={path} className="ml-2 group-hover:font-bold">
          {title}
        </a>
      </div>
    </div>
  );
};
