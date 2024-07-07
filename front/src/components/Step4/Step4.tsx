import { MoonLoader } from "react-spinners";
import { Label } from "../ui/label";

export const Step4 = () => {
  return (
    <div className="w-full h-full flex justify-center items-center mt-40">
      <div className="flex flex-col items-center gap-4 m-20">
        <MoonLoader color="#8EDD2A" speedMultiplier={0.5} size={130} />
        <Label className="text-center font-normal">
          Por favor, aguarde um momento...
        </Label>
      </div>
    </div>
  );
};
