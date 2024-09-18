import React from 'react';

function Widget({ widget, onRemove }) {
  return (
    <div>
      <h4>{widget.name}</h4>
      <p>{widget.text}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default Widget;
