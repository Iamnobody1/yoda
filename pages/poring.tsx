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
  const [mounted, setMounted] = useState(false);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const [poringUnits, setPoringUnits] = useState(10);
  const [width, setWidth] = useState(50);
  const [height, setHeight] = useState(50);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      console.log('00');
      setClientHeight(document.getElementById('bun')?.offsetHeight || 0);
      setClientWidth(document.getElementById('bun')?.offsetWidth || 0);
      console.log(poringUnits);
      for (let index = 0; index < poringUnits; index++) {
        console.log('01');
        addUnits();
        moveMent();
      }
    }
    console.log(1);
  }, []);

  const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const checkRouter = () => {
    if (router?.query != undefined) {
      setPoringUnits(parseInt(`${router.query.units}`));
    }
  };

  const moveMentX = () => {
    const maxWidth = clientWidth;
    const minWidth = (15 * maxWidth) / 100;
    let positionX = random(minWidth, maxWidth);
    if (positionX <= minWidth + width) positionX = maxWidth + width;
    if (positionX >= maxWidth - width) positionX = maxWidth - width;
    console.log('X', minWidth, maxWidth, positionX);
    return positionX;
  };

  const moveMentY = () => {
    const maxHeight = clientHeight;
    const minHeight = (60 * maxHeight) / 100;
    let positionY = random(minHeight, maxHeight);
    if (positionY <= minHeight + height) positionY = maxHeight + height;
    if (positionY >= maxHeight - height) positionY = maxHeight - height;
    console.log('Y', minHeight, maxHeight, positionY);
    return positionY;
  };

  const addUnits = () => {
    setPorings((items) => [
      ...items,
      {
        id: items.length + 1,
        sprite: '/poring.gif',
        width: width,
        height: height,
        positionX: moveMentX(),
        positionY: moveMentY(),
      },
    ]);
  };

  const moveMent = () => {
    porings.map((poring) => {
      poring.positionX = moveMentX();
      poring.positionY = moveMentY();
      return poring;
    });
    setPorings(porings);
    setInterval(() => {
      moveMent();
    }, 2000);
  };

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
