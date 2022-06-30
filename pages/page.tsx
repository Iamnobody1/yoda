import React from 'react';

function Index() {
  return (
    <>
      <div className="relative h-[400px] w-[400px] bg-red-500 transition-all duration-300">
        <div
          className="absolute top-[50%] left-[50%]  h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-blue-300 transition-all duration-300"
          id="fluke"
        ></div>
      </div>

      <div className="flex h-[400px] w-[400px] items-center justify-center bg-green-500 transition-all duration-300">
        <div className="h-[100px] w-[100px]  rounded-3xl bg-blue-300 transition-all duration-300" id="fluke">
          <img src="https://ext.derpicdn.net/r4KU5sMaTItY8sXvSgKFvmkEeb4/aHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvcHJvL2ltYWdlcy84LzgyL1BvcmluZy5naWYvcmV2aXNpb24vbGF0ZXN0L3RvcC1jcm9wL3dpZHRoLzIyMC9oZWlnaHQvMjIwP2NiPTIwMTAwMzAyMTEzMTMx"></img>
        </div>
      </div>
    </>
  );
}

export default Index;
