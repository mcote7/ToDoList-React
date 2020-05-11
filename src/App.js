import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Task from './components/Task'

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <h1>Do Your Chores !</h1>
      <Input list={list} setList={setList} />
      <hr/><hr/>
      <div className="row">
        <div className="col">
          {list.map((task, i) => (
            <Task task={task} setList={setList} index={i} list={list}/>
            ))}
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
