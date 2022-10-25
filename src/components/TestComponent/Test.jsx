
import {useState} from 'react';
import {wrapInUsd, parseNumber} from './util'
import './index.css'

const TestComponent = ({name}) => {
  const [currNumber, setCurrNumber] = useState(wrapInUsd(0))

  console.log({name})
  return (
    <div className="test-component">
      <h1>{`Hello ${name}`}</h1>
      {`Count is: ${currNumber}`}
      <button onClick={() => setCurrNumber(wrapInUsd(parseNumber(currNumber)+1))}>+</button>
      <button onClick={() => setCurrNumber(wrapInUsd(parseNumber(currNumber)-1))}>-</button>
    </div>
  );
}

export default TestComponent