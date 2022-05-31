import React from 'react';
import Nav from './components/nav.js';
import Sidebar from './components/sidebar.js';
const LayoutFrame = ({ children }) => {
  return (
    <section className={'mainbg block h-screen'}>
      <Nav />
      <div className="pt-[86px]">
        <div>
          <Sidebar />
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};
export default LayoutFrame;
