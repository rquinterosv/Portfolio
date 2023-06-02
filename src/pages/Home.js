import React from 'react';

// components
import Menu from '../components/Menu';
import Tasks from '../components/TasksList'

function Home() {
  return (
    <><Menu />

      <div>
        <h1>Task List HOME</h1>
        <Tasks />
      </div>

    </>
  );
}

export default Home;
