import React from 'react';
const Settings = () => {
  return (
    <section>
      <div className="w-[95%] mx-auto">
        <div>
          <p className="text-gray-400">Manage your account </p>
          <h2 className="text-[1.65rem] text-slate-700 font-bold">
            Account Details
          </h2>
        </div>
        <div className="mt-6">
          <p className="text-gray-400 text-[0.9rem] font-bold">PERSONAL</p>
          <div className="mt-2">
            <div>
              {' '}
              <span className="text-slate-700 font-bold">Name:</span>{' '}
              <span className="text-gray-400 font-bold">Dominic west</span>{' '}
            </div>
            <div>
              {' '}
              <span className="text-slate-700 font-bold">Email:</span>{' '}
              <span className="text-gray-400 font-bold">domwest@gmail.com</span>
            </div>
            <div>
              {' '}
              <span className="text-slate-700 font-bold">role:</span>{' '}
              <span className="text-gray-400 font-bold">OWNER</span>{' '}
            </div>
          </div>
        </div>
        <div className="my-3">
          <button className="bg-white text-red-700 font-bold border-[1px] border-red-700 rounded-md px-3 py-1 shadow-md text-[0.87rem] hover:bg-red-700 hover:text-white hover:text-[0.8rem] ">
            Change Password
          </button>
        </div>
        <div>
          <SubAdmins />
        </div>
      </div>
    </section>
  );
};
export default Settings;
const SubAdmin = () => {
  return (
    <div className="flex mb-4">
      <img
        className="w-[60px] h-[60px] rounded-md mr-2"
        src="https://raw.githubusercontent.com/dom-codex/Foodapp-admin-frontend/develop/src/asset/jollofrice.jpeg"
      />
      <div>
        <div>
          <span className="text-slate-700 font-bold">Name:</span> <span>Dominic west</span>
        </div>
        <div>
          {' '}
          <span>Email:</span> <span>domwest@gmail.com</span>
        </div>
        <div>
          {' '}
          <span>adminId:</span> <span>000230</span>{' '}
        </div>
        <div>
          {' '}
          <span>role:</span> <span>OWNER</span>{' '}
        </div>
      </div>
    </div>
  );
};
const SubAdmins = () => {
  const admins = [{}, {}, {}];
  return (
    <div>
      {admins.map(() => (
        <SubAdmin />
      ))}
    </div>
  );
};
