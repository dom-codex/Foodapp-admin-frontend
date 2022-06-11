import React from 'react';
import PageLabel from '../components/pagelabel.js';
import Rider from '../components/rider.js';
const Riders = () => {
  return (
    <section>
      <div>
        <PageLabel label="Riders" value="01" />
        <div>
          <Rider />
        </div>
      </div>
    </section>
  );
};
export default Riders;
