/*
 * This file contains components for building the
 * events page
 **/
import React, { useState } from 'react';
import { Card } from '../Cards/Card';
import { Cardlist } from '../../Data/card_data.json';

export function Events() {
  const [searchInput, setInput] = useState('');

  //@var sets searchInput
  const search = (event) => {
    setInput(event.target.value);
  };

  /*@var events_data
   * Returns cards
   */
  const events_data = Cardlist.filter((event) =>
    event.title.toLowerCase().includes(searchInput)
  ).map((event) => (
    //ToDo clean up this
    <Card
      key={Math.random()}
      id={event.id}
      imageUrl={event.imageUrl}
      title={event.title}
      date={event.date}
      tickets_avail={event.tickets_avail}
    />
  ));

  return (
    <>
      <div className="searchArea container">
        <form>
          <div className="search">
            <i className="ico-search"></i>
            <input
              type="text"
              name="search"
              placeholder="Search By Event Title..."
              onChange={search}
            />
          </div>
        </form>
      </div>
      <div className="white-bg-container">
        <div className="container">
          <h2>
            Events <span className="faded-h1">({events_data.length})</span>
          </h2>
          {events_data}
        </div>
      </div>
    </>
  );
}
