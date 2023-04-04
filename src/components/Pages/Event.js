import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Cardlist } from '../../Data/card_data.json';

export function Event() {
  let imageUrl,
    title,
    date,
    tickets_avail,
    inputNum = 2,
    count = 1;

  const { id } = useParams();
  const ID = parseInt({ id }.id);

  const card = Cardlist.find((item) => item.id === ID);
  if (card) {
    imageUrl = card.imageUrl;
    title = card.title;
    date = card.date;
    tickets_avail = card.tickets_avail;
  }
  //Form handler stuff
  const [inputs, setInputs] = useState(['', '']);
  const [visible, setVisible] = useState(false);
  const [vis, setVisibleCard] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    //get values
    let user0_name = event.target.userdefault.value;
    //hide/show cards
    setVisible(!visible);
    setVisibleCard(visible);
     
      console.log(inputs.length);
  };

  const AddInput = () => {
    setInputs([...inputs, '']);
  };

  //---
  return (
    <div className="wrapper">
      {vis && (
        <div className="form_wrapper">
          <div className="form_wrapper--desc">
            <h2>{title}</h2>
            <p>{date}</p>
            <p>
              Tickets available: <span>{tickets_avail}</span>
            </p>
          </div>

          <hr className="line" />

          <form onSubmit={handleSubmit}>
            <div className="fullName">
              <label htmlFor="fullName">Name</label>
              <input
                type="text"
                name="fullName"
                id="userdefault"
                required="true"
                placeholder="FirstName LastName"
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required="true"
                placeholder="username@domain.com"
              />
            </div>
            <div className="mobile">
              <label htmlFor="Mobile">Mobile</label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                required="true"
                placeholder="+9XXX XXX XXXX"
              />
            </div>

            <div className="info">
              <label htmlFor="attendee">Attendees</label>
            </div>

            {inputs.map((input, index) => (
              <div className="fullName attendance_num">
                <label htmlFor="fullName ">{index + 1}</label>
                <input
                  type="text"
                  key={index}
                  id={`user${index + 1}`}
                  name="fullName"
                  placeholder="FirstName LastName"
                />
              </div>
            ))}

            <div className="addAttendee_btn">
              <button className="addAttendee_btn--btn" onClick={AddInput}>
                + Add an Attendee
              </button>
            </div>

            <hr className="line" />

            <div className="action-btn">
              <input
                type="submit"
                name="Book Tickets"
                className="btn btn-solid-orange"
              />
              <button className="btn btn__outline--orange">Cancel</button>
            </div>
          </form>
        </div>
      )}
      {visible && <Confirm title={title} date={date} tickets={5} />}
    </div>
  );
}

function Confirm(props) {
  return (
    <>
      <div className="col-4">
        <div className="card txt-center card-align-center">
          <div className="card-body">
            <p className="card-title">
              You have booked{' '}
              <strong className="txt-orange">{props.tickets}</strong>{' '}
              <strong>tickets</strong> for
            </p>
            <div className="line"></div>
            <div className="card__title--desc">
              <h2>{props.title}</h2>
              <small>{props.date}</small>
            </div>
            <div className="line"></div>
            <div className="action-btn">
              <input
                type="submit"
                className="btn btn-lg-half btn-solid-orange"
                name="Make Payment"
              />
              <a className="btn btn-lg btn__outline--orange">Back To Booking</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
