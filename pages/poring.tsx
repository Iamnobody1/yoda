import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

//
interface IPoring {
  id: number;
  sprite: string;
  width: number;
  height: number;
  positionX: number;
  positionY: number;
}

function Poring() {
  const router = useRouter();
  const [porings, setPorings] = useState<IPoring[]>([]);
  let poringUnits = 0;
  let clientHeight = 0;
  let clientWidth = 0;

  const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    if (router?.query != undefined) {
      poringUnits = parseInt(`${router.query.units}`);
    }
    clientHeight = document.getElementById('bun')?.offsetHeight || 0;
    clientWidth = document.getElementById('bun')?.offsetWidth || 0;
    console.log(poringUnits);
  }, []);

  useEffect(() => {
    const maxHeight = clientHeight;
    const minHeight = (75 * maxHeight) / 100;
    const maxWidth = clientWidth;
    const minWidth = (0 * maxWidth) / 100;

    setInterval(() => {
      let positionX = random(minWidth, maxWidth);
      let positionY = random(minHeight, maxHeight);
      const width = 50;
      const height = 50;

      if (positionX <= minWidth) positionX = maxWidth + width;
      if (positionX >= maxWidth) positionX = maxWidth - width;

      if (positionY <= minHeight) positionY = maxHeight + height;
      if (positionY >= maxHeight) positionY = maxHeight - height;

      const items: IPoring[] = [];
      items.push({
        id: items.length + 1,
        sprite: '/poring.gif',
        width: width,
        height: height,
        positionX: positionX,
        positionY: positionY,
      });
      items.push({
        id: items.length + 1,
        sprite: '/poring.gif',
        width: width,
        height: height,
        positionX: positionX,
        positionY: positionY,
      });
      setPorings(items);
    }, 3000);
  }, []);

  return (
    <>
      <div
        id="bun"
        className="overflow-hidden"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundImage: `url('/genshin.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {porings.map((poring, idx) => {
          return (
            <img
              key={poring.id}
              className="absolute"
              src={poring.sprite}
              alt=""
              style={{
                position: 'absolute',
                width: poring.width,
                height: poring.height,
                top: poring.positionY,
                left: poring.positionX,
                transition: '6000ms',
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default Poring;
