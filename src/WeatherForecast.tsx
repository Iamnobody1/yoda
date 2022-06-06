import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Post {
  id: number;
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

function WeatherForecast() {
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    axios
      .get<Post[]>('https://localhost:5001/WeatherForecast')
      .then((response) => {
        setPosts(response.data);
      });
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-4 font-mono text-white text-sm text-center font-bold leading-6 rounded-lg">
        {posts.map((post) => (
          <div key={post.id} className="p-4 rounded-lg shadow-lg  bg-gray-200 ">
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg"
              key={post.id}
            >
              <img
                className="w-full"
                src="https://thecatapi.com/api/images/get?format=src&type=gif"
                alt=""
              />
              <div className="px-6 py-4">
                <div className="text-gray-600 font-bold text-xl mb-2">
                  {post.temperatureC}
                </div>
                <p className="text-gray-400 text-base">
                  {post.temperatureF} F | {post.temperatureC} C
                </p>
                <p>{post.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherForecast;
