import React from 'react';
import { useSnapshot } from 'valtio';

import state from '../Store';
import { getContrastingColor } from '../Config/helpers';

const CustomButton = ({ type = 'filled', title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  // Generate styles based on the button type
  const generateStyle = (type) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color || '#000', // Default to black if snap.color is undefined
        color: getContrastingColor(snap.color || '#000') // Generate contrasting color
      };
    } else if (type === 'outline') {
      return {
        borderWidth: '1px',
        borderColor: snap.color || '#000',
        color: snap.color || '#000'
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
