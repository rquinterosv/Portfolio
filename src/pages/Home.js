import React from 'react';
import '../App.css';


// components
import Menu from '../components/Menu';
import Tasks from '../components/TasksList'

function Home() {
  return (
    <><Menu />

      <div className='home-body'>
        <h1>Task List HOME</h1>
        <Tasks />
      </div>

    </>
  );
}

export default Home;
