import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { count } from 'console';
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
  // const [clientHeight, setClientHeight] = useState(0);
  // const [clientWidth, setClientWidth] = useState(0);
  // const clientHeight = 0;
  // const clientWidth = 0;
  const screenRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const heightRef = useRef(0);
  const widthRef = useRef(0);

  useEffect(() => {
    console.log('useEffect []');
    if (router.asPath !== router.route) {
      console.log(router.query.units);
      heightRef.current = document.getElementById('bun')?.offsetHeight || 0;
      widthRef.current = document.getElementById('bun')?.offsetWidth || 0;
      // setClientHeight(document.getElementById('bun')?.offsetHeight || 0);
      // setClientWidth(document.getElementById('bun')?.offsetWidth || 0);
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

  const getScreenWidtth = () => {
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
      positionX: moveMentX(),
      positionY: moveMentY(),
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
            positionX: obj.positionX - 100,
            positionY: moveMentY(),
          };
        }
        return obj;
      }),
    );
    const nextExecutionTime = random(4000, 6000);
    setTimeout(() => {
      moveMent(id);
    }, nextExecutionTime);
  };

  const checkLeft = () => {
    const items = [true, false];
    const item = items[Math.floor(Math.random() * items.length)];
    return item;
  }

  const moveMentX = () => {
    const maxWidth = getScreenWidtth();
    const minWidth = (15 * maxWidth) / 100;
    let positionX = random(minWidth, maxWidth);
    if (positionX <= minWidth + width) positionX = maxWidth + width;
    if (positionX >= maxWidth - width) positionX = maxWidth - width;
    return positionX;
  };

  const moveMentY = () => {
    const maxHeight = getScreenHeight();
    const minHeight = (60 * maxHeight) / 100;
    let positionY = random(minHeight, maxHeight);
    if (positionY <= minHeight + height) positionY = maxHeight + height;
    if (positionY >= maxHeight - height) positionY = maxHeight - height;
    return positionY;
  };

  const x = () => {
    if (screenRef.current) {
    }
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
