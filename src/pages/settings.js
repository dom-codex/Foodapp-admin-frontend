import React from 'react';
const Settings = () => {
  return (
    <section>
      <div>
        <div>
          <p>Manage your account </p>
          <h2>Account Details</h2>
        </div>
        <div>
          <p>PERSONAL</p>
          <div>
            <span>Name:</span> <span>Dominic west</span>
            <span>Email:</span> <span>domwest@gmail.com</span>
            <span>role:</span> <span>OWNER</span>
          </div>
        </div>
        <div>
          <button>Change Password</button>
        </div>
        <div></div>
      </div>
    </section>
  );
};
export default Settings;
const SubAdmin = () => {
  return (
    <div>
      <img src="https://raw.githubusercontent.com/dom-codex/Foodapp-admin-frontend/develop/src/asset/jollofrice.jpeg" />
      <div>
        <div><span>Name:</span> <span>Dominic west</span></div>
       <div> <span>Email:</span> <span>domwest@gmail.com</span></div>
       <div> <span>adminId:</span> <span>000230</span> </div>
        <div> <span>role:</span> <span>OWNER</span> </div>
      </div>
    </div>
  );
};
const SubAdmins = () => {
  return <div></div>;
};
