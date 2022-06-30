import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
interface IPoring {
  id: number;
  sprite: string;
  width: number;
  height: number;
  positionX: number;
  positionY: number;
}

const Poring: NextPage = () => {
  const router = useRouter();
  const [porings, setPorings] = useState<IPoring[]>([]);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const bunRef = useRef(null);

  useEffect(() => {
    if (bunRef) {
      console.log(bunRef?.current?.offsetWidth!);
    }
    console.log('useEffect []');
    if (router.asPath !== router.route) {
      console.log(router.query.units);
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
  }, [router, bunRef]);

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
            positionX: moveMentX(),
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

  const moveMentX = () => {
    const maxWidth = WidthRef.current;
    const minWidth = (15 * maxWidth) / 100;
    let positionX = random(minWidth, maxWidth);
    if (positionX <= minWidth + width) positionX = maxWidth + width;
    if (positionX >= maxWidth - width) positionX = maxWidth - width;
    return positionX;
  };

  const moveMentY = () => {
    const maxHeight = clientHeight;
    const minHeight = (60 * maxHeight) / 100;
    let positionY = random(minHeight, maxHeight);
    if (positionY <= minHeight + height) positionY = maxHeight + height;
    if (positionY >= maxHeight - height) positionY = maxHeight - height;
    return positionY;
  };

  return (
    <div
      ref={bunRef}
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
};

export default Poring;
