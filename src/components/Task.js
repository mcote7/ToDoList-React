import React from 'react';

const Task = (props) => {
    const {task, index, list, setList} = props;

    const onClick = () => {
        return setList(() => list.filter(task => list.indexOf(task) !== index));
    }

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]); 
    }

    return(
        <div className="mycontainer">
            <input readOnly placeholder={task.name} className="form-control readonly"/>
            <hr/>
            <label className="mylabel">Completed &nbsp;</label>
            <input onChange={onChange} type="checkbox" checked={task.isComplete}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-danger" onClick={onClick}></button>
        </div>
    );
};

export default Task;

