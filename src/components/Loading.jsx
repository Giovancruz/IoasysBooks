import React from 'react';

const Loading = (props) => {
  return (
    <div class=" flex flex-col justify-center items-center h-screen">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      <div class="mt-4">Carregando...</div>
    </div>
  );
}

export default Loading;