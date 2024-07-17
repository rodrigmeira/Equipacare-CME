"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { filtrarModelos } from "@/utils/filtrarModelos";
import { faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import { ButtonResult } from "../ButtonResult/ButtonResult";
import { Label } from "../ui/label";

interface Step4Props {
  numeroAutoclaves: number;
  modelosAutoclaves: any[];
  numeroLavadoras: number;
  modelosLavadoras: any[];
}

export const Step4 = ({
  numeroAutoclaves,
  modelosAutoclaves,
  numeroLavadoras,
  modelosLavadoras,
}: Step4Props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const marcas = ["A", "B", "C", "D", "E", "F"];
  const resultadoAutoclaves: any[] = modelosAutoclaves;
  const resultadoAutoclavesPorMarca: any[] = marcas.map((marca) =>
    filtrarModelos(resultadoAutoclaves, marca)
  );

  const resultadoLavadoras: any[] = modelosLavadoras;
  const resultadoLavadorasPorMarca: any[] = marcas.map((marca) =>
    filtrarModelos(resultadoLavadoras, marca)
  );

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
        <div className="flex flex-col items-center gap-4 h-screen overflow-y-auto scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-green-300">
          <Label className="text-[25px] font-light">Autoclaves</Label>
          <Card className="md:w-[500px] max-w-4xl bg-[#031125] text-white">
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
                  {resultadoAutoclavesPorMarca.map((item, index) => (
                    <TableRow key={index} className="bg-dark-900">
                      <TableCell className="flex items-center gap-3 px-4 py-2">
                        <div>
                          <div className="text-[12px]">
                            Marca {item[0].marca}
                          </div>
                          <div className="text-[10px] text-[#D3F842]">
                            Descrição da marca
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="px-4 py-2 text-[12px] text-center">
                        {item[0].modelo}, {item[1].modelo}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-[12px] text-center">
                        R${item[0].preco} - R${item[1].preco}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex justify-center items-center px-4 pt-4 pb-2">
                <h3 className="text-sm font-extralight text-center">
                  Recomendamos{" "}
                  <span className="text-[#D3F842] font-light">
                    {numeroAutoclaves}
                  </span>{" "}
                  {numeroAutoclaves > 1 ? "Autoclaves" : "Autoclave"} para
                  atender sua demanda{" "}
                </h3>
              </div>
            </CardContent>
          </Card>
          <Label className="text-[25px] font-light mt-3">Lavadoras Termo</Label>
          <Card className="md:w-[500px] max-w-4xl bg-[#031125] text-white mb-5">
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
                  {resultadoLavadorasPorMarca.map((item, index) => (
                    <TableRow key={index} className="bg-dark-900">
                      <TableCell className="flex items-center gap-3 px-4 py-2">
                        <div>
                          <div className="text-[12px]">
                            {item.length > 1
                              ? `Marca ${item[0].marca}`
                              : `Marca ${item[0].marca}`}
                          </div>
                          <div className="text-[10px] text-[#D3F842]">
                            Descrição da marca
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="px-4 py-2 text-[12px] text-center">
                        {item.length > 1
                          ? `${item[0].modelo}, ${item[1].modelo}`
                          : item[0].modelo}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-[12px] text-center">
                        {item.length > 1
                          ? `R$ ${item[0].preco}  - R$ ${item[1].preco}`
                          : `R$ ${item[0].preco}`}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex justify-center items-center px-4 pt-4 pb-2">
                <h3 className="text-sm font-extralight text-center">
                  Recomendamos{" "}
                  <span className="text-[#D3F842] font-light">
                    {numeroLavadoras}
                  </span>{" "}
                  {numeroLavadoras > 1 ? "Lavadoras" : "Lavadora"} para atender
                  sua demanda{" "}
                </h3>
              </div>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center mb-16">
            <ButtonResult>
              <a
                href="https://api.whatsapp.com/send?phone=5524981191448&text=Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20detalhado%20para%20meu%20projeto!"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon
                  className="mr-2"
                  size="lg"
                  icon={faSquarePollVertical}
                  style={{ color: "#ffffff" }}
                />
                Solicitar orçamento detalhado
              </a>
            </ButtonResult>
          </div>
        </div>
      )}
    </div>
  );
};
