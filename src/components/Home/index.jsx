import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const initialData = JSON.parse(localStorage.getItem('data')) || { counter: 0, num: 0 };
  
  const redirectToCalculatePage = () => {
    navigate('/calculate');
  };
  
  return (
    <div>
      <h3>{Number(initialData.counter)}</h3>
      <button onClick={redirectToCalculatePage}>Calculate</button>
    </div>
  );
}