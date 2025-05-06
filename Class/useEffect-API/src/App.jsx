import { useEffect, useState } from 'react';
import './index.css';

function App() {
  const[enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      const {clientX, clientY} = event;
      setPosition({x: clientX, y: clientY});
    }
    if (enabled) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      console.log('Limpiando el evento');
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [enabled]);
 
 
  return (
    <main>
      <div style={{
         position: 'absolute',
         backgroundColor: 'rgba(0, 0, 0, 0.5)',
         border: '1px solid #fff',
         borderRadius: '50%',
         opacity: 0.8,
         pointerEvents: 'none',
         left: -25,
         top: -25,
         width: 50,
         height: 50,
         transform: `translate(${position.x}px, ${position.y}px)`
      }}></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App
