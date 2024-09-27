import React from "react";
import { useNavigate } from 'react-router-dom';



export function MainPage() {
    const navigate = useNavigate();

    const handleStartGame = () => {
        navigate('/game');
    }

  return (
    <div>
      <button onClick={handleStartGame}>Начать игру</button>
    </div>
  );
}
