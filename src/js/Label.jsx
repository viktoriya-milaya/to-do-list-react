import React from 'react';

export default function ListItem({ className, text , checked, disabled}) {
  return <div className="createtask">
    <label className={className}>
      <input className="task-list__input" type="checkbox" checked={checked} disabled={disabled}/>
      <span className="task-list__checkbox"></span>
     {text}
    </label>
  </div>
}


