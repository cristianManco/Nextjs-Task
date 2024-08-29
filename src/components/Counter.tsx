"use client";

import { useState } from "react";

export default function Home() {
  const [temporal, setTemporal] = useState<number>(1);
  console.log(temporal);
  return (
    <div className="min-h-screen	 flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold">{temporal}</h1>
      <div className="flex gap-10">
        <button className="bg-blue-400" onClick={()=> setTemporal( temporal+1 )}>Increment</button>
        <button className="bg-blue-400" onClick={()=> setTemporal( temporal -1)}>Decrement</button>
      </div>
    </div>
  );
}
