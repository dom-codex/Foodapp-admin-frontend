import React from 'react';
import foodIcon from '../asset/foodcovered.svg';
const Nav = () => {
  return (
    <nav className={'w-full block shadow-lg'}>
      {/**container for mobile  */}
      <div className="flex justify-between items-center p-4 pr-1  w-full ">
        <div className="flex items-center">
          <img src={foodIcon} className={'h-8 w-8 mr-2'} />
          <h2>Foodie</h2>
        </div>
        <div className="invisible">
          <i className="material-icons">dehaze</i>
        </div>
        {/**options container for large screen */}
        <div className="flex ">
          <div className="relative mr-4">
            <i className="material-icons">notifications</i>
            <div className="absolute top-0 right-0  h-2 w-2 bg-red-500 rounded-lg"></div>
          </div>
          <div className="mr-4">
            <i className={'material-icons '}>person</i>
          </div>
          <div className="relative group">
            <i className={'material-icons '}>more_vert</i>
            <div className="invisible group-hover:visible   absolute right-0 -bottom-[42px] px-3  h-12 bg-white rounded-sm shadow-lg flex items-center text-sm">
              <button className="flex justify-center items-center bg-white">
                <i className="material-icons">power_settings_new</i>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
