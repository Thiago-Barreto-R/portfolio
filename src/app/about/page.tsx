'use client';
import React, { useState } from 'react';
import RootLayout from '../layout';
import { IntroAnimation } from '@/components/intro';
import { GiMaterialsScience } from 'react-icons/gi';
import { FaComputer } from 'react-icons/fa6';
import Image from 'next/image';
import Teste from '../../../public/programing.svg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { RiCodeSLine } from 'react-icons/ri';
import { RiCodeSSlashFill } from 'react-icons/ri';
import { CiMedal } from 'react-icons/ci';

export default function About() {
  const [showIntro, setShowIntro] = useState(true);
  const phrases = [
    'JavaScript',
    'Python3',
    'Typescript',
    'React',
    'JSX&TSX',
    'Docker',
    'Electron',
    'Mysql',
    'Node',
    'NVM',
    'Tailwind CSS',
    'WSL2',
    'Shadcn UI',
    'Figma',
    'Bash',
    'Shell',
  ];
  return (
    <>
      {showIntro ? (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      ) : (
        <div
          id="about"
          className="flex min-h-screen w-full flex-col items-center justify-center py-5"
        >
          <section className="flex items-center">
            <Image
              src={Teste}
              alt="Imagem de perfil"
              className="h-36 w-36 rounded-md border border-blue-950"
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
                <p className="indent-8 text-base">
                  Sou um desenvolvedor apaixonado com 23 anos, que começou sua
                  jornada na programação como aprendiz. Desde então, acumulei
                  experiência valiosa no desenvolvimento de sistemas.
                  Atualmente, trabalho como Auxiliar de Engenharia de Teste, mas
                  minha verdadeira paixão está na parte de software, onde crio
                  soluções web, aplicativos desktop e automações para otimizar
                  processos na linha.
                </p>
                <p className="indent-8 text-base">
                  Estou sempre em busca de novos desafios e aprendizados, e
                  acredito que a tecnologia tem o poder de transformar e dar
                  vida.
                </p>
              </section>
            </div>
          </section>
          <section className="flex w-full flex-col items-start justify-start">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline">
                  Minhas Formações e cursinhos
                </AccordionTrigger>
                <AccordionContent className="w-full">
                  <p className="text-lg font-bold">
                    1 - Formado em Ciência da Computação (2020 a 2024) - UNIP
                  </p>
                  <p>2 - Curso de Python - Completo</p>
                  <p>
                    3 - Curso de Desenvolvimento de Robôs com Python - Completo
                  </p>
                  <p>4 - Curso de Visão Computacional - Completo</p>
                  <p>5 - Curso de Bancos de Dados SQL e NoSQL - Completo</p>
                  <p>6 - Curso de Desenvolvimento Web - Completo</p>
                  <p>
                    7 - Curso de Desenvolvimento Desktop com Electron - Completo
                  </p>
                  <p>8 - Curso de Java - Completo</p>
                  <p>9 - Curso de Docker - Completo</p>
                  <p>10 - Curso de Flutter - Cursando</p>
                  <p>11 - Curso de Angular.js - Cursando</p>
                  <p>12 - Curso de Vue.js - Cursando</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <h5 className="mt-2 text-sm italic">
              Alguns cursos foram apenas para dar continuidade às introduções
              aprendidas durante a faculdade.
            </h5>
          </section>
          <section className="mt-5 flex w-full flex-col items-center justify-center gap-1">
            <h4>Atuando no mercado a mais de +3 anos</h4>
            <p className="text-xs text-stone-400">
              Tecnologias que uso no dia a dia para as atividade
            </p>
            <section className="container mx-auto">
              <div className="relative flex overflow-hidden">
                <div className="absolute z-10 h-full w-20 bg-gradient-to-r from-white dark:from-stone-950"></div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: '-100%' }}
                  transition={{
                    duration: 240,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="flex flex-shrink-0"
                >
                  {phrases.concat(phrases).map((phrase, index) => (
                    <p
                      className="flex items-center gap-0.5 pr-20 text-stone-950 dark:text-stone-50"
                      key={index}
                    >
                      <RiCodeSLine />
                      {phrase}
                      <RiCodeSSlashFill />
                    </p>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: '-100%' }}
                  transition={{
                    duration: 240,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="flex flex-shrink-0"
                >
                  {phrases.concat(phrases).map((phrase, index) => (
                    <p
                      className="flex items-center gap-0.5 pr-20 text-stone-950 dark:text-stone-50"
                      key={index}
                    >
                      <RiCodeSLine />
                      {phrase}
                      <RiCodeSSlashFill />
                    </p>
                  ))}
                </motion.div>
                <div className="absolute right-0 z-10 h-full w-20 bg-gradient-to-l from-white dark:from-stone-950"></div>
              </div>
            </section>
          </section>
          <section className="mt-5 flex w-full flex-col items-start justify-start">
            <h4 className="text-lg font-semibold">Experiência Profissional</h4>
            <section className="mt-2">
              <h5 className="italic">- Freelancer (2020 a 2022)</h5>
              <p>
                Aqui foi o meu primeiro desafio na antes de entrar para uma
                empresa, um rapaz querendo entrar no mundo de NFT's. O primeiro
                sistema foi para um portfólio particular com o intuito de chamar
                compradores. O segundo já foi a criação do sistema web, mas o
                sistema era para a web3.0, foi um baita desafio para quem estava
                iniciando no mundo da programação.
              </p>
            </section>
            <section className="mt-2">
              <h5 className="italic">- Multilaser (Junho de 2022 - atual)</h5>
              <p className="indent-8 text-base">
                Atualmente, trabalho como Auxiliar de Engenharia de Teste na
                <span className="font-bold">
                  {' '}
                  Multilaser ou GrupoMulti(nome atual)
                </span>
                , onde sou responsável por desenvolver, implementar e dar
                treinamento para os usuários. Em projetos anteriores, desenvolvi
                um sistema para o controle de estoque para engenharia e o time
                da qualidade que resultou em um melhor controle e monitoramento
                de equipamentos e spareparts que saiam e retornavam para a sala
                de estoque e as manutênções ficaram mais organizadas e facil de
                fazer.
              </p>
            </section>
          </section>
          <section className="mt-5 flex w-full flex-col items-start justify-start">
            <h5 className="flex items-center gap-2 text-base font-semibold">
              Projetos Relevantes <CiMedal />
            </h5>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>2 - Sistema para o AT</AccordionTrigger>
                <AccordionContent>
                  O sistema web fullstack, foi desenvolvido para fazer o
                  acompanhamento de Scrap's, com gastos diarios, semanais e
                  mensais. Acompanhamento de Lcd's , com valores recuperados
                  diarios, semanais e mensais. Junto com eles foi criado mais um
                  modulo(Estufa) que faz um monitoramento de 24hr da placa no
                  forno.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  3 - Sistema integrado com sensores
                </AccordionTrigger>
                <AccordionContent>
                  O projeto surgiu em meio a uma demanda de auditoría, para que
                  fosse mais visivel e fácil o acompanhamento das temperaturas e
                  umidades dos setores. O sistema conta com gráficos
                  personalizados e dinâmicos para visualização dos horários das
                  atualizações e funções personalizadas para o download das
                  atualizações em excel.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      )}
    </>
  );
}
