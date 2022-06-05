import React,{useState} from 'react';
import Nav from './components/nav.js';
import Sidebar from './components/sidebar.js';
const LayoutFrame = ({ children }) => {
  const [showSlide,setShowSlide]=useState(false)
  return (
    <section className={'mainbg block min-h-screen'}>
      <Nav slideToggler={setShowSlide}/>
      <div className="pt-[86px]">
        <div>
          <Sidebar canOpen={showSlide} />
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};
export default LayoutFrame;
