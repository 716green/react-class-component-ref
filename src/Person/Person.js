import React from 'react';
import './Person.css';

const style = {
  color: 'darkred',
  cursor: 'pointer',
  fontSize: '.5rem',
  width: '100px',
  margin: 'auto',
  padding: '10px 0',
};

const person = (props) => {
  const { name, age, click, changed } = props;

  return (
    <div className="Person">
      <p>
        {name} is {age} years old
      </p>
      <p style={style} onClick={click}>
        [delete]
      </p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default person;
