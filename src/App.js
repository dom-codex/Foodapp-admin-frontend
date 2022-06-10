import React from 'react';
import LayoutFrame from './layoutbuilder.js';
import Dashboard from './pages/dashboard.js';
import Foods from './pages/foods.js';
import Customers from './pages/customers.js';
import Login from './pages/login.js';
import Nav from './components/nav.js';
import Sidebar from './components/sidebar.js';
import './style.css';

export default function App() {
  return (
    <div className="">
      <LayoutFrame>
        <Customers />
      </LayoutFrame>
    </div>
  );
}
