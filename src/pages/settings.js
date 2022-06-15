import React from 'react';
const Settings = () => {
  return (
    <section>
      <div className="w-[95%] mx-auto">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-400">Manage your account </p>
            <h2 className="text-[1.65rem] text-slate-700 font-bold">
              Account Details
            </h2>
          </div>
          <button className="flex items-center text-gray-700 font-bold hover:text-red-500">
            <i className="material-icons">power</i>
            Logout
          </button>
        </div>
        <div className="mt-4 bg-gray-50 py-6 pl-3">
          <p className="text-gray-400 text-[0.9rem] font-bold">PERSONAL</p>
          <AdminDetails/>
        </div>
        <div className="my-3">
          <button className="bg-white text-red-700 font-bold border-[1px] border-red-700 rounded-md px-3 py-1 shadow-md text-[0.87rem] hover:bg-red-700 hover:text-white hover:text-[0.8rem] ">
            Change Password
          </button>
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-between pr-3 bg-gray-50 py-3 px-2 mb-2">
            <p className="font-bold text-gray-800">Subadmins</p>
            <button className="flex items-center border-2 border-gray-600 text-gray-600 font-bold text-[0.8rem] px-3 py-1 rounded-md bg-white hover:bg-gray-600 hover:text-white">
              <i className="material-icons">add</i>
              New Admin
            </button>
          </div>
          <SubAdmins />
        </div>
      </div>
    </section>
  );
};
export default Settings;

const AdminDetails = ()=>{
  return <div className="mt-2">
  <div>
    {' '}
    <span className="text-slate-700 font-bold">Name:</span>{' '}
    <span className="text-gray-500 font-bold">Dominic west</span>{' '}
  </div>
  <div>
    {' '}
    <span className="text-slate-700 font-bold">Email:</span>{' '}
    <span className="text-gray-500 font-bold">domwest@gmail.com</span>
  </div>
  <div>
    {' '}
    <span className="text-slate-700 font-bold">role:</span>{' '}
    <span className="text-gray-500 font-bold">OWNER</span>{' '}
  </div>
</div>
}
const SubAdmin = () => {
  return (
    <div className="flex mb-4 bg-white shadow-lg p-3 rounded-md relative">
      <img
        className="w-[60px] h-[60px] rounded-md mr-2"
        src="https://raw.githubusercontent.com/dom-codex/Foodapp-admin-frontend/develop/src/asset/jollofrice.jpeg"
      />
      <div className="flex-1">
        <div>
          <span className="text-slate-700 font-bold">Name:</span>{' '}
          <span className="text-gray-500 font-bold">Dominic west</span>
        </div>
        <div>
          {' '}
          <span className="text-slate-700 font-bold">Email:</span>{' '}
          <span className="text-gray-500 font-bold">domwest@gmail.com</span>
        </div>
        <div>
          {' '}
          <span className="text-slate-700 font-bold">adminId:</span>{' '}
          <span className="text-gray-500 font-bold">000230</span>{' '}
        </div>
        <div>
          {' '}
          <span className="text-slate-700 font-bold">role:</span>{' '}
          <span className="text-gray-500 font-bold">OWNER</span>{' '}
        </div>
      </div>
      <button>
        <i className="material-icons text-red-500">delete</i>
      </button>
    </div>
  );
};
const SubAdmins = () => {
  const admins = [{}, {}, {}];
  return (
    <div className="sm:grid sm:grid-cols-[repeat(2,1fr)] gap-4">
      {admins.map(() => (
        <SubAdmin />
      ))}
    </div>
  );
};
