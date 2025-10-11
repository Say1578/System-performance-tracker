import React, { useState } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

function App() {
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <button
        onClick={handleClick}
        className={`relative text-5xl font-bold text-white transition-transform duration-150 select-none ${isPressed ? 'scale-90' : 'scale-100'
          }`}
      >
        Click on
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute bg-white opacity-20 rounded-full pointer-events-none animate-ripple"
            style={{
              width: 50,
              height: 50,
              left: ripple.x - 25,
              top: ripple.y - 25,
            }}
          />
        ))}
      </button>
    </div>
  );
}

export default App;
