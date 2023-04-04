import React from 'react';
import Button from './Button';
import ListItem from './ListItem';

export default function Wrap() {
    return <main className="wrap bg-dark text-white">
        <h2 className="heading">To Do List</h2>;
        <div className="head">
            <input type="text" className="newtask" placeholder="Need to do..." />
            <Button text="Add" className="button button-push" handler={() => alert(`Hi!`)} />
        </div>

        <ul classclassName="task-list">
            <ListItem className="task" id="pattern1" text="Yuor task..." disabled="disabled"/>
            <ListItem className="task task_check" id="pattern2" text="Task completed" disabled="disabled"/>
        </ul>
        <Button text="Clear list" className="button button-clear" handler={() => alert(`Clear`)} />
    </main>
};

