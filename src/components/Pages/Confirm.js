import React from 'react';

export function Confirm() {
  return ( 
    <>
     <div className="col-4">
      <div className="card">
        
        <div className="card-body">
          <h5 className="card-title">You have booked 5 tickets for</h5>
           <div className="line"></div>
          <div className="card__title--desc">
             <h2>RGD Event la</h2> 
              <small>21 Sept, 2020</small>
          </div>
           <div className="line"></div>
          <a  className=''>
            Make Payment
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
