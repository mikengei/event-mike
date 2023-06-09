/*
 * Handles event form
 * ToDo : clean up components code, reusable inputs
 */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Cardlist } from '../../Data/card_data.json';
import { Link } from 'react-router-dom';

export function Event() {
  let imageUrl, title, date, tickets_avail, ticket_num;

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
  const [values, setValues] = useState([]);
  const [visible, setVisible] = useState(false);
  const [vis, setVisibleCard] = useState(true);

  //A handler for form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    ticket_num = values.length + 1;
    //hide/show cards
    setVisible(!visible);
    setVisibleCard(visible);
    //console.log(ticket_num);
  };

  //A handler for adding inputs
  const AddInput = (event) => {
    event.preventDefault();
    setInputs([...inputs, '']);
  };

  const extraNames = (event, index) => {
    const { name, value } = event.target;
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
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
                pattern="[a-zA-Z ]*"
                required={true}
                placeholder="FirstName LastName"
              />
              <span className="form__error">* Please enter your name</span>
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                required={true}
                placeholder="username@domain.com"
              />
              <span className="form__error">* Please enter your email</span>
            </div>
            <div className="mobile">
              <label htmlFor="Mobile">Mobile</label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                pattern="[0-9+]+"
                required={true}
                placeholder="+9XXX XXX XXXX"
              />
              <span className="form__error">
                * Please enter your mobile number
              </span>
            </div>

            <div className="info">
              <label htmlFor="attendee">Attendees</label>
            </div>

            {inputs.map((inputValue, index) => (
              <div className="fullName attendance_num" key={index}>
                <label htmlFor="fullName ">{index + 1}</label>
                <input
                  type="text"
                  name={`user${index + 1}`}
                  key={`key${index}`}
                  placeholder="FirstName LastName"
                  onChange={(event) => extraNames(event, index)}
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
              <Link to="/" className="btn btn-lg-half btn__outline--orange">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      )}
      {visible && <Confirm title={title} date={date} tickets={ticket_num} />}
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
                value="Make Payment"
              />
              <Link
                to="/"
                className="btn btn-lg-half btn-lg btn__outline--orange"
              >
                Back To Booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
