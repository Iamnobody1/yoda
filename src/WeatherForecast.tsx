import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Post {
  id: string;
  userId: string;
  title: string;
  body: string;
}

function WeatherForecast() {
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      });
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-4 rounded-lg text-center font-mono text-sm font-bold leading-6 text-white">
        {posts.map((post) => (
          <div key={post.id} className="rounded-lg bg-gray-200 p-4  shadow-lg ">
            <div
              className="max-w-sm overflow-hidden rounded shadow-lg"
              key={post.id}
            >
              <img
                className="w-full"
                src="https://thecatapi.com/api/images/get?format=src&type=gif"
                alt=""
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold text-gray-600">
                  {post.title}
                </div>
                <p className="text-base text-gray-400">{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherForecast;
