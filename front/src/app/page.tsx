"use client";

import { ButtonForm, Progress, Step1, Step3 } from "@/components";
import { Step2 } from "@/components/Step2/Step2";
import { Step4 } from "@/components/Step4/Step4";
import { FormEvent, useEffect, useState } from "react";

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
      timer = setTimeout(() => setProgress(100), 3500);
      return () => clearTimeout(timer);
    }
    console.log(progress);
  }, [count]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (count < 3) {
      setCount(count + 1);
    }
  };

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
      <form onSubmit={handleSubmit}>
        {count > 3 && <h1 className="text-2xl font-bold">Resultados</h1>}
        {count === 1 && <Step1 />}
        {count === 2 && <Step2 />}
        {count === 3 && <Step3 />}
        {count === 4 && <Step4 />}
        <div className="flex items-center justify-center">
          {count < 4 && <ButtonForm>Próximo</ButtonForm>}
          {count === 4 && null}
        </div>
      </form>
    </div>
  );
}
