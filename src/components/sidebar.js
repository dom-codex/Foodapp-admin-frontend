import React from 'react';
const Sidebar = () => {
  const data = [{ title: 'Dashboard', path: '#', icon: 'dashboard' }];
  return (
    <aside>
      <div>
        {data.map((data, i) => {
          return <SideItem data={data} />;
        })}
      </div>
    </aside>
  );
};
export default Sidebar;
const SideItem = ({ data: { icon, path, title } }) => {
  return (
    <div className="group relative  border-2 hover:bg-orange-500 h-16">
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
