import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Assets/styles/scss/main.scss';

import { Nav } from './components/Navbar/Nav';
import { Events } from './components/Pages/Events';
import { Event } from './components/Pages/Event';

export default function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <Nav />
              <Events />
            </>
          }
        />
        <Route path="/event/:id" element={<Event />} />
      </Routes>
    </>
  );
}
