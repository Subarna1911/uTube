import React from 'react';

function Card({ children }) {
  return (
    <div className="p-4 border rounded-md shadow-md">
      {children}
    </div>
  );
}

export default Card;
