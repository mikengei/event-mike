import React from 'react';
import { Card } from '../Cards/Card';
import { Cardlist } from '../../Data/card-data';

export function Home() {
  const events_data = Cardlist.map((event) => {
    return (
      <Card
        key={Math.random()}
        id={event.id}
        imageUrl={event.imageUrl}
        title={event.title}
        date={event.date}
        tickets_avail={event.tickets_avail}
      />
    );
  });

  return (
    <div className="white-bg-container">
      <div className="container">
        <h2>
          Events <span className="faded-h1">({events_data.length})</span>
        </h2>
        {events_data}
      </div>
    </div>
  );
}
