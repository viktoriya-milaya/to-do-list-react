import React from 'react';

export default function Button({ text, className, handler }) {
      return <button type="button" onClick={handler} className={className}>{text}</button>;
  };

