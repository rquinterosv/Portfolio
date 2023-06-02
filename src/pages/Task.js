import React from 'react';
import '../App.css';


// components
import Menu from '../components/Menu';
import TasksList from '../components/TasksList'

function Task() {
  return (
    <><Menu />

      <div>
        <h1>Task List</h1>
        <TasksList />
      </div>

    </>
  );
}

export default Task;
