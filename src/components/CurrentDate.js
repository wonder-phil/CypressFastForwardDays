import React, { useState } from 'react';

function CurrentDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div>
      {currentDate.toLocaleDateString()} 
    </div>
  );
}

export default CurrentDate;
