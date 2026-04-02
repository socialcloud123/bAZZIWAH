import { useState } from 'react';
import Btn from './Btn';

const LearnMoreBtn = () => {
  const [h, setH] = useState(false);
  return (
    <button
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        alignSelf: 'flex-start',
        background: h ? '#7c3aed' : '#c8ff00',
        color: h ? '#fff' : '#0d0d1a',
        border: 'none',
        borderRadius: 50,
        padding: '10px 24px',
        fontSize: 10, fontWeight: 800,
        letterSpacing: '0.05em', textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: "'Syne', sans-serif",
        marginTop: 'auto',
        boxShadow: h ? '0 10px 25px rgba(124, 58, 237, 0.4)' : 'none',
        transform: h ? 'translateY(-2px)' : 'none'
      }}
    >
      LEARN MORE
    </button>
  );
};

export default LearnMoreBtn;
