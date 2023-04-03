import React, { useState } from 'react';

export function Card({ title, imageUrl, date, tickets_avail, id }) {
  let [buttonText, setButtonText] = useState('Book Event');

  let ticket_number, icon_slot, txt_type, button_title, orangetxt, btn_color;

  if (tickets_avail == 0) {
    ticket_number = 'N/A';
    buttonText = 'SOLD OUT';
    icon_slot = 'ico-closed';
    btn_color = 'btn__outline--grey btn-disabled';
    txt_type = 'txt-grey';
  } else {
    ticket_number = tickets_avail;
    btn_color = 'btn__outline--orange';
    icon_slot = 'ico-open';
    buttonText = 'Book Event';
    txt_type = 'txt-orange';
  }

  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          <img src={imageUrl} alt="Card" className="card-img-top" />
        </div>

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card__title--desc">
            <small className="fl-left">{date}</small>
            <small className="fl-right">
              Tickets Available:{' '}
              <span className={txt_type}>{ticket_number}</span>
            </small>
          </div>
          <a
            href={`/event/${id}`}
            className={` btn btn-lg ${btn_color} ${icon_slot}`}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
