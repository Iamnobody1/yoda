import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
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
  const screenRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

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
    const item: IPoring = {
      id: random(99999999, 1000000000),
      sprite: '/poring.gif',
      width: 50,
      height: 50,
      positionX: moveMentX(null),
      positionY: moveMentY(null),
    };
    return item;
  };

  const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const moveMent = (id: number) => {
    setPorings((current) =>
      current.map((obj) => {
        if (obj.id === id) {
          return {
            ...obj,
            positionX: moveMentX(obj.positionX),
            positionY: moveMentY(obj.positionY),
          };
        }
        return obj;
      }),
    );
    const nextExecutionTime = random(2000, 8000);
    setTimeout(() => {
      moveMent(id);
    }, nextExecutionTime);
  };

  // const littleMove = () => {
  //   const items = random(0, 200);
  //   if (checkLeft()) return items * -1;
  //   return items;
  // };

  const checkLeft = () => {
    const items = [true, false];
    const item = items[Math.floor(Math.random() * items.length)];
    return item;
  };

  const moveMentX = (currentPositionX: number | null): number => {
    const maxWidth = getScreenWidth();
    const minWidth = (60 * maxWidth) / 100;
    const positionX = random(0, 200);
    if (currentPositionX) {
      currentPositionX = random(100, 100);
    }
    if (checkLeft()) {
      currentPositionX! -= positionX;
    } else {
      currentPositionX! += positionX;
    }
    console.log('cur2 : ', currentPositionX);
    if (currentPositionX! <= minWidth + width) currentPositionX = minWidth + width;
    if (currentPositionX! >= maxWidth - width) currentPositionX = maxWidth - width;
    return currentPositionX!;
  };

  const moveMentY = (currentPositionY: number | null): number => {
    const maxHeight = getScreenHeight();
    const minHeight = (60 * maxHeight) / 100;
    console.log(minHeight, maxHeight);
    const positionY = random(0, 200);
    if (currentPositionY) {
      currentPositionY = random(minHeight, maxHeight);
    }

    if (checkLeft()) {
      currentPositionY! -= positionY;
    } else {
      currentPositionY! += positionY;
    }
    console.log('cur2 : ', currentPositionY);

    if (currentPositionY! <= minHeight + height) currentPositionY = minHeight + height;
    if (currentPositionY! >= maxHeight - height) currentPositionY = maxHeight - height;
    return currentPositionY!;
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
          <img
            key={poring.id}
            className="absolute"
            src={poring.sprite}
            alt=""
            style={{
              position: 'absolute',
              width: poring.width,
              height: poring.height,
              transform: `translate(${poring.positionX}px, ${poring.positionY}px)`,
              transitionDuration: '6000ms',
            }}
          />
        );
      })}
    </div>
  );
}

export default Poring;
