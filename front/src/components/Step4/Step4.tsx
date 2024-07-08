"use client";

import Image from "next/image";
import logo from "@/../../public/image6.svg";
import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import { Label } from "../ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Step4 = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const data = [
    {
      logo: logo,
      brand: "Marca A",
      description: "Descrição da marca",
      model: "A1, A8",
      price: "R$0.000 - R$0.000",
    },
    {
      logo: logo,
      brand: "Marca B",
      description: "Descrição da marca",
      model: "B3, B4",
      price: "R$0.000 - R$0.000",
    },
    {
      logo: logo,
      brand: "Marca C",
      description: "Descrição da marca",
      model: "C1, C7",
      price: "R$0.000 - R$0.000",
    },
    {
      logo: logo,
      brand: "Marca D",
      description: "Descrição da marca",
      model: "D3, D5, D6",
      price: "R$0.000 - R$0.000",
    },
    {
      logo: logo,
      brand: "Marca E",
      description: "Descrição da marca",
      model: "E7, E15",
      price: "R$0.000 - R$0.000",
    },
    {
      logo: logo,
      brand: "Marca F",
      description: "Descrição da marca",
      model: "F2, F4",
      price: "R$0.000 - R$0.000",
    },
  ];

  return (
    <div className="w-full h-full flex justify-center items-center mt-10">
      {isLoading ? (
        <div className="flex flex-col items-center gap-4 m-20">
          <MoonLoader color="#8EDD2A" speedMultiplier={0.5} size={130} />
          <Label className="text-center font-normal">
            Aguarde um momento, estamos gerando os melhores resultados para
            você!
          </Label>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 h-screen overflow-y-auto scroll-smooth scrollbar-thin scrollbar-track-green-100 scrollbar-thumb-green-300">
          <Label className="text-[25px] font-light">Autoclaves</Label>
          <Card className="w-[500px] max-w-4xl bg-[#031125] text-white">
            <CardContent className="mt-7">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#D3F842]/40 h-10 text-white">
                    <TableCell className="px-4 py-2 text-center font-medium">
                      MARCA
                    </TableCell>
                    <TableCell className="px-4 py-2 text-center font-medium">
                      MODELO
                    </TableCell>
                    <TableCell className="px-4 py-2 text-center font-medium">
                      PREÇO
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((item, index) => (
                    <TableRow key={index} className="bg-dark-900">
                      <TableCell className="flex items-center gap-3 px-4 py-2">
                      <Image src={item.logo} alt={`${item.brand} logo`} width={48} height={48} />
                        <div>
                          <div className="text-[12px]">{item.brand}</div>
                          <div className="text-[10px] text-[#D3F842]">{item.description}</div>
                        </div>
                      </TableCell>
                      <TableCell className="px-4 py-2 text-[12px] text-center">
                        {item.model}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-[12px] text-center">
                        {item.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Label className="text-[25px] font-light mt-3">Lavadoras Termo</Label>
          <Card className="w-[500px] max-w-4xl bg-[#031125] text-white mb-14">
            <CardContent className="mt-7">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#D3F842]/40 h-10 text-white">
                    <TableCell className="px-4 py-2 text-center font-medium">
                      MARCA
                    </TableCell>
                    <TableCell className="px-4 py-2 text-center font-medium">
                      MODELO
                    </TableCell>
                    <TableCell className="px-4 py-2 text-center font-medium">
                      PREÇO
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((item, index) => (
                    <TableRow key={index} className="bg-dark-900">
                      <TableCell className="flex items-center gap-3 px-4 py-2">
                      <Image src={item.logo} alt={`${item.brand} logo`} width={48} height={48} />
                        <div>
                          <div className="text-[12px]">{item.brand}</div>
                          <div className="text-[10px] text-[#D3F842]">{item.description}</div>
                        </div>
                      </TableCell>
                      <TableCell className="px-4 py-2 text-[12px] text-center">
                        {item.model}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-[12px] text-center">
                        {item.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
