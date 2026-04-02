import { useState } from 'react';

const Btn = ({ children }) => {
  const [h, setH] = useState(false);
  return (
    <button
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: h ? '#7e22ce' : '#9333ea',
        color: '#fff',
        border: 'none',
        borderRadius: 50,
        padding: '12px 24px',
        fontSize: 12,
        fontWeight: 600,
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
      }}
    >
      {children}
    </button>
  );
};

export default Btn;
