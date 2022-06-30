import React from 'react';

interface Iporing{
  id: number;
  sprite: string;
  width: number;
  height: number;
  positionX: number;
  positionY: number;
}

function Poring() {
  const items: Iporing[] = [
    {
      id: 1,
      sprite: '/poring.gif',
      width: 40,
      height: 40,
      positionX: 200,
      positionY: 200,
    },
  ];

  {porings}
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/genshin.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <div className="absolute left-[120px] top-[120px] h-[50px] w-[50px]">
          <img src="/poring.gif"></img>
        </div>
      </div>
    </>
  );
}

export default Poring;
