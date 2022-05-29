import React from 'react';
import { getDustBg } from '../asset/dustsvg.js';
const Login = () => {
  return (
    <section className={`mainbg h-screen`}>
      <div className={'h-full flex'}>
        <div>
          <div>
            <img src={''} />
          </div>
          <h2>FOODIE Admin</h2>
          <div>
            <div>
              <i className={'materal-icons'}></i>
              <input placeholder={'Email or staffId'} type={'text'} />
            </div>
            <div>
              <i className={'material-icons'}></i>
              <input type={'password'} placeholder={'password'} />
            </div>
            <div>
              <button>Sign in</button>
            </div>
            <div>
              <small>forgot password?</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
