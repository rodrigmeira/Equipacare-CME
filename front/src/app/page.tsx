"use client";

import { Progress } from "@/components";
import { useEffect, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(1);
  const [progress, setProgress] = useState(3);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (count === 1) {
      timer = setTimeout(() => setProgress(3), 300);
      return () => clearTimeout(timer);
    }
    if (count === 2) {
      timer = setTimeout(() => setProgress(33), 300);
      return () => clearTimeout(timer);
    }
    if (count === 3) {
      timer = setTimeout(() => setProgress(66), 300);
      return () => clearTimeout(timer);
    }
    if (count === 4) {
      timer = setTimeout(() => setProgress(100), 300);
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
      <h3 className="text-base font-extralight">Step {count} of 4</h3>
      {count <= 3 && (
        <h1 className="text-2xl font-bold">Preencha as informações</h1>
      )}
      {count > 3 && <h1 className="text-2xl font-bold">Resultados</h1>}
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
      {count === 4 && (
        <div>
          <div>Etapa 4</div>
          <button onClick={() => setCount(count + 1)}>Avançar</button>
        </div>
      )}
    </div>
  );
}
