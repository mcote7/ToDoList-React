import React from 'react';

const Task = (props) => {
    const {task, index, list, setList} = props;

    const onClick = () => {
        setList(() => list.filter(task => list.indexOf(task) !== index));
    };

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    };

    const showDelete = () => {
        if(list[index].isComplete) {
            return(
                <button className="btn btn-danger" onClick={onClick}></button>
            );
        }
    }

    let className ="form-control readonly";
    if(list[index].isComplete) {
            className += "form-control readonly line";
        }
        let id ="mycontainer";
        if(list[index].isComplete) {
                id = "complete";
            }
    return(
        <div id={id}>
            <input readOnly placeholder={task.name} className={className}/>
            <hr/>
            <label className="mylabel">Completed &nbsp;</label>
            <input onChange={onChange} type="checkbox" checked={task.isComplete}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {showDelete()}
        </div>
    );
};

export default Task;

