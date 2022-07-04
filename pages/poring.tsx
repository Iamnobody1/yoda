import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface IMapMonster {
  id: number;
  mapId: number;
  monsterId: number;
  currentHealth: number;
  facing: string;
  positionX: number;
  positionY: number;
  monster: IMonster;
}

interface IMonster {
  id: number;
  health: number;
  sprite: string;
  facing: string;
  width: number;
  height: number;
}

function Poring() {
  const screenRef = useRef(null);
  const router = useRouter();
  const [mapMonsters, setMapMonsters] = useState<IMapMonster[]>([]);

  useEffect(() => {
    if (router.asPath !== router.route) {
      setInterval(() => {
        apiGetData();
      }, 1000);
    }
  }, [router, screenRef]);

  const apiGetData = (): void => {
    axios.get<IMapMonster[]>('https://localhost:5001/map-monsters?mapId=1').then((response) => {
      setMapMonsters(response.data);
    });
  };

  const minPositionY = () => {
    return (60 * maxPositionY()) / 100;
  };

  const maxPositionY = () => {
    return screenRef.current ? screenRef.current.offsetHeight : 0;
  };

  const minPositionX = () => {
    return (15 * maxPositionX()) / 100;
  };

  const maxPositionX = () => {
    return screenRef.current ? screenRef.current.offsetWidth : 0;
  };

  const attack = (id: number): void => {
    setMapMonsters((currents) =>
      currents.map((current) => {
        if (current.id === id) {
          return {
            ...current,
            health: current.currentHealth - 1,
          };
        }
        return current;
      }),
    );
  };

  const moveMent = (id: number) => {
    setMapMonsters((current) =>
      current.map((obj) => {
        if (obj.id === id) {
          const facing = randomFacing();
          return {
            ...obj,
            facing: facing,
            positionX: moveMentX(obj),
            positionY: moveMentY(obj),
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

  const moveMentX = (mapMonster: IMapMonster): number => {
    const facing = mapMonster.facing;
    const width = mapMonster.monster.width;
    let curPositionX = mapMonster.positionX;
    const movPosition = random(0, 200);

    if (!curPositionX) curPositionX = random(minPositionX(), maxPositionX());
    if (facing === 'left') curPositionX -= movPosition;
    else curPositionX += movPosition;

    if (curPositionX <= minPositionX() + width) curPositionX = minPositionX() + width;
    if (curPositionX >= maxPositionX() - width) curPositionX = maxPositionX() - width;

    return curPositionX;
  };

  const moveMentY = (mapMonster: IMapMonster): number => {
    const facing = mapMonster.facing;
    const height = mapMonster.monster.height;
    let curPositionY = mapMonster.positionY;
    const movPosition = random(0, 200);

    if (!curPositionY) curPositionY = random(minPositionY(), maxPositionY());
    if (facing === 'left') curPositionY -= movPosition;
    else curPositionY += movPosition;

    if (curPositionY <= minPositionY() + height) curPositionY = minPositionY() + height;
    if (curPositionY >= maxPositionY() - height) curPositionY = maxPositionY() - height;

    return curPositionY;
  };

  const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const randomFacing = (): string => {
    const facings = ['left', 'right'];
    const facing = facings[Math.floor(Math.random() * facings.length)];
    return facing;
  };

  const respawn = (id: number): void => {
    setMapMonsters((currents) =>
      currents.map((current) => {
        if (current.id === id && current.currentHealth === 0) {
          const fullHealth = 5;
          return {
            ...current,
            health: fullHealth,
          };
        }
        return current;
      }),
    );
    console.log('used');
    const nextExecutionTime = random(6000, 12000);
    setTimeout(() => {
      respawn(id);
    }, nextExecutionTime);
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
      {mapMonsters.map((mapMonster) => {
        return (
          <div
            key={`${mapMonster.id}`}
            style={{
              display: mapMonster.monster.health === 0 ? 'none' : '',
              position: 'absolute',
              width: mapMonster.monster.width,
              height: mapMonster.monster.height,
              transform: `translate(${mapMonster.positionX}px, ${mapMonster.positionY}px)`,
              transition: `transform 6s`,
            }}
          >
            <img
              onClick={() => attack(mapMonster.id)}
              className="absolute"
              src={mapMonster.monster.sprite}
              height={mapMonster.monster.height}
              width={mapMonster.monster.width}
              alt=""
              style={{
                transform: `rotateY(-${mapMonster.facing === 'right' ? 180 : 0}deg)`,
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
