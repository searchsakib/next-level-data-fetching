import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <progress className="progress progress-success w-56"></progress>
    </div>
  );
};

export default Loading;
