import React from "react";



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
