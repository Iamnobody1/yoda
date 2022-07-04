import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { count } from 'console';
interface IPoring {
  id: number;
  sprite: string;
  facing: string;
  width: number;
  height: number;
  positionX: number;
  positionY: number;
}

function Poring() {
  const screenRef = useRef(null);
  const router = useRouter();
  const [porings, setPorings] = useState<IPoring[]>([]);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const heightRef = useRef(0);
  const widthRef = useRef(0);

  useEffect(() => {
    if (router.asPath !== router.route) {

      setHeight(50);
      setWidth(50);
      const items: IPoring[] = [];
      for (let i = 0; i < parseInt(`${router.query.units}`); i++) {
        const item = poringData();
        items.push(item);
        moveMent(item.id);
      }
      setPorings(items);
    }
  }, [router, screenRef]);

  const getScreenWidth = () => {
    return screenRef.current ? screenRef.current.offsetWidth : 0;
  };

  const getScreenHeight = () => {
    return screenRef.current ? screenRef.current.offsetHeight : 0;
  };

  const poringData = () => {
    const curFacing = randomFacing();
    const item: IPoring = {
      id: random(99999999, 1000000000),
      facing: curFacing,
      sprite: '/poring.gif',
      width: 50,
      height: 50,
      positionX: moveMentX(curFacing),
      positionY: moveMentY(curFacing),
    };
    return item;
  };

  const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const randomFacing = (): string => {
    const facings = ['left', 'right'];
    const facing = facings[Math.floor(Math.random() * facings.length)];
    return facing;
  };

  const moveMent = (id: number) => {
    setPorings((current) =>
      current.map((obj) => {
        if (obj.id === id) {
          const facing = randomFacing();
          return {
            ...obj,

            facing: facing,
            positionX: moveMentX(facing, obj.positionX),
            positionY: moveMentY(facing, obj.positionY),
          };
        }
        return obj;
      }),
    );
    const nextExecutionTime = random(6000, 12000);
    setTimeout(() => {
      moveMent(id);
    }, nextExecutionTime);
  };


  const moveMentX = (facing: string, position?: number): number => {
    const maxPosition = getScreenWidth();
    const minPosition = (15 * maxPosition) / 100;
    const movPosition = random(0, 200);

    if (!position) position = random(minPosition, maxPosition);
    if (facing === 'left') position -= movPosition;
    else position += movPosition;

    if (position <= minPosition + width) position = minPosition + width;
    if (position >= maxPosition - width) position = maxPosition - width;

    return position;
  };

  const moveMentY = (facing: string, position?: number): number => {
    const maxPosition = getScreenHeight();
    const minPosition = (60 * maxPosition) / 100;
    const movPosition = random(0, 200);

    if (!position) position = random(minPosition, maxPosition);
    if (facing === 'left') position -= movPosition;
    else position += movPosition;

    if (position <= minPosition + height) position = minPosition + height;
    if (position >= maxPosition - height) position = maxPosition - height;

    return position;
  };

  return (
    <div
      ref={screenRef}
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
      {porings.map((poring) => {
        return (
          <div
            key={poring.id}
            style={{
              position: 'absolute',
              width: poring.width,
              height: poring.height,
              transform: `translate(${poring.positionX}px, ${poring.positionY}px)`,
              transition: `transform 6s`,
            }}
          >
            <img
              className="absolute"
              src={poring.sprite}
              alt=""
              style={{
                transform: `rotateY(-${poring.facing === 'right' ? 180 : 0}deg)`,
                transition: `transform 0s`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Poring;
