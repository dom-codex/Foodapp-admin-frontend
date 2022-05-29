import React from 'react';
import { getDustBg } from '../asset/dustsvg.js';
const Login = () => {
  return (
    <section className={`mainbg h-screen`}>
      <div className={'h-full w-full flex justify-center'}>
        <div
          className={
            'bg-[rgba(0,0,0,0.01)] flex items-center backdrop-blur-sm flex-col mt-8 p-11 w-3/4 h-min rounded-md overflow-hidden shadow-lg'
          }
        >
          <div>
            <img src={''} />
          </div>
          <h2 className={'text-[2rem] font-bold'}>FOODIE </h2>
          <p>Admin login</p>
          <div className={'mt-8'}>
            <div className={' mb-4 h-12 relative rounded-md overflow-hidden'}>
              <i className={'material-icons absolute top-3 left-2'}>mail</i>
              <input
                placeholder={'Email or staffId'}
                type={'text'}
                className={'h-full bg-[rgba(0,0,0,0.05)] pl-8'}
              />
            </div>
            <div
              className={
                ' mb-4 h-12 reltive rounded-md overflow-hidden relative'
              }
            >
              <i className={'material-icons absolute top-3 left-2'}>lock</i>
              <input
                type={'password'}
                placeholder={'password'}
                className={'h-full bg-[rgba(0,0,0,0.05)] pl-8'}
              />
            </div>
            <div className={'w-3/4 mx-auto h-11 rounded-md overflow-hidden'}>
              <button
                className={
                  'h-full bg-black text-white w-full hover:bg-black/50 hover:rounded-lg hover:font-bold hover:text-black border-4 border-black'
                }
              >
                Sign in
              </button>
            </div>
            <div className={'text-right mt-4'}>
              <small>forgot password?</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
