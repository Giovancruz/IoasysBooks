import React from 'react';

const Loading = (props) => {
  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      <div className="mt-4">Carregando...</div>
    </div>
  );
}

export default Loading;