import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Courses() {
  return (
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
            <p>3 - Curso de Desenvolvimento de Robôs com Python - Completo</p>
            <p>4 - Curso de Visão Computacional - Completo</p>
            <p>5 - Curso de Bancos de Dados SQL e NoSQL - Completo</p>
            <p>6 - Curso de Desenvolvimento Web - Completo</p>
            <p>7 - Curso de Desenvolvimento Desktop com Electron - Completo</p>
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
  );
}
