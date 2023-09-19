import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const InlineDiv = styled.div`
  display: inline-block;
  border: 3px solid green;
`;
const StyledP = styled.p`
  font: 55px;
`;

const PrimaryButton = styled.button`
  color: red;
`;

export default function Calculate () {
  const navigate = useNavigate();
  const initialData = JSON.parse(localStorage.getItem('data')) || {counter: 0, num: 0 };

  // const [counter,setCounter] = useState(Number(localStorage.getItem('counter')) || 0);
  // const [num,setNum] = useState(Number(localStorage.getItem('num')) || 0);
  const [counter,setCounter] = useState(Number(initialData.counter) || 0);
  const [num,setNum] = useState(Number(initialData.num) || 0);

  const [result,setResult] = useState(0);
  const [showPopup, setshowPopup] = useState(false);

  useEffect(() => {
    const initial = JSON.parse(localStorage.getItem('data')) || { counter: 0, num: 0 };
    initial.counter = counter;
    initial.num = num;
    localStorage.setItem('data', JSON.stringify(initial));
  }, [counter, num]);

  // useEffect(() => {
  //   localStorage.setItem('num', num);
  // }, [num]);


  const handleChange = (event) => {
    const newNum = Number(event.target.value);
    setNum(newNum);
  }
  
  const addClick = () => {
    const newResult = counter + num;
    setResult(newResult);
    setshowPopup(true);
    if (window.confirm(newResult))
    {
      setCounter(newResult);
    }
  }

  const closeClick = () => {
    setCounter(result);
    setshowPopup(false);
  }

  const resetClick = () => {
    setCounter(0);
    setNum(0);
    setResult(0);
    setshowPopup(false);
  }
  
  return (
    <div>
      <header>
        <InlineDiv>
          {counter}
          <PrimaryButton onClick={() => setCounter(counter + 1)}> + </PrimaryButton>
          <button onClick={() => setCounter(counter - 1)}> - </button>
        </InlineDiv>
        <div className='input-section'>
          <input value={num} onChange={handleChange} /> 
          <button onClick={addClick}>Add</button>
          {showPopup && 
          <div className='result-section'>
            {result}
            <button onClick={closeClick}>Close</button>
          </div>
          }          
        </div>      
      </header>
      <button onClick={resetClick}>Reset</button>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
}
