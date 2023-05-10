import React from 'react';

// components
import Menu from '../components/Menu';
import Tasks from '../components/Tasks'

function Home() {
  return (
    <><Menu />

      <div>
        <h1>Task List</h1>
        <Tasks />
      </div>

    </>
  );
}

export default Home;
