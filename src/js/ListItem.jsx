import React from 'react';
import Label from './Label'
import Button from './Button'


export default function ListItem({ id, className, text , checked, disabled }) {
  return <li className="task-list__item" id={id}>
    <div className="createtask">
      <Label text={text} className={className} disabled={disabled} checked={checked}/>
    </div>
    <Button text="×" className="button-delete" handler={() => alert(`Delete task`)} />
  </li>
}


