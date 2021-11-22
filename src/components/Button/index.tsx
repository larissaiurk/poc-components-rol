import React from 'react';

export interface Buttonprops {
  label: string
  onClick: () => void
};

export function Button({ label, onClick }: Buttonprops) {
  return (
    <button 
      onClick={onClick}
    >
      {label}
    </button>
  );
}