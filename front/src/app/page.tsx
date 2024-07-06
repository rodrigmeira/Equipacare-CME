"use client";

import { Progress } from "@/components";
import { useEffect, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (count === 1) {
      timer = setTimeout(() => setProgress(3), 500);
      return () => clearTimeout(timer);
    }
    if (count === 2) {
      timer = setTimeout(() => setProgress(33), 500);
      return () => clearTimeout(timer);
    }
    if (count === 3) {
      timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }
    console.log(progress);
  }, [count]);

  return (
    <div>
      <Progress
        value={progress}
        className="absolute top-0 left-0 w-full h-4 border-1 rounded-none"
      />
      {count === 1 && (
        <div>
          <div>Etapa 1</div>
          <button onClick={() => setCount(count + 1)}>Avançar</button>
        </div>
      )}
      {count === 2 && (
        <div>
          <div>Etapa 2</div>
          <button onClick={() => setCount(count + 1)}>Avançar</button>
        </div>
      )}
      {count === 3 && (
        <div>
          <div>Etapa 3</div>
          <button onClick={() => setCount(count + 1)}>Avançar</button>
        </div>
      )}
    </div>
  );
}
