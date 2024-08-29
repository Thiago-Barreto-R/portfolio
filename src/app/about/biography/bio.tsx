import React from 'react';
import { GiMaterialsScience } from 'react-icons/gi';
import { FaComputer } from 'react-icons/fa6';
import Image from 'next/image';
import Teste from '../../../../public/programing.svg';

export default function Bio() {
  return (
    <section className="flex items-center pt-20">
      <Image
        src={Teste}
        alt="Imagem de perfil"
        className="h-64 w-64 rounded-md border border-blue-950 p-2"
      />
      <div className="ml-2 flex flex-col items-start gap-3">
        <div>
          <h2 className="text-2xl font-bold">Thiago Barreto Rodrigues</h2>
          <p className="flex items-center gap-1 text-xs italic text-zinc-600">
            <FaComputer />
            Cientista da Computação
            <GiMaterialsScience />
          </p>
        </div>
        <section className="flex flex-col gap-1">
          <p className="indent-4 text-base">
            Sou um desenvolvedor apaixonado com 23 anos, que começou sua jornada
            na programação como aprendiz. Desde então, acumulei experiência
            valiosa no desenvolvimento de sistemas. Atualmente, trabalho como
            Auxiliar de Engenharia de Teste, mas minha verdadeira paixão está na
            parte de software, onde crio soluções web, aplicativos desktop e
            automações para otimizar processos na linha.
          </p>
          <p className="indent-4 text-base">
            Estou sempre em busca de novos desafios e aprendizados, e acredito
            que a tecnologia tem o poder de transformar e dar vida.
          </p>
        </section>
      </div>
    </section>
  );
}
