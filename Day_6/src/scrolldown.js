import React, { useState } from 'react';

const PopDownComponent = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <div>
      <button onClick={toggleContent}>Toggle Pop-down</button>
      {isContentVisible && (
        <div style={{ border: '1px solid black', padding: '10px' }}>
          {/* Your pop-down content goes here */}
          <p>This is the hidden content that pops down!</p>
        </div>
      )}
    </div>
  );
};

export default PopDownComponent;
