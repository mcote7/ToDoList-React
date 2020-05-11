import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Task from './components/Task'

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <h1 className="text2">Do Your Chores !</h1>
      <hr className="hr2"/>
      <Input list={list} setList={setList} />
      <hr className="hr2"/>
        <div className="row2">
          <m className="bull">&bull;</m>&nbsp;&nbsp;<h4 className="text2">  Your Chores </h4>&nbsp;&nbsp;&nbsp;<m className="bull">&bull;</m> 
        </div>
      <hr className="hr2"/>
      <div className="row">
        <div className="col"></div>
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
