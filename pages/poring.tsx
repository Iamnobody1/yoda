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

  const apiDecrementHealth = (mapMonsterId: number): void => {
    axios.put<IMapMonster[]>(
      `https://localhost:5001/map-monsters/${mapMonsterId}/decrement-health?value=1`,
    );
  };

  const attack = (id: number): void => {
    apiDecrementHealth(id);
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
              display: mapMonster.currentHealth === 0 ? 'none' : '',
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
