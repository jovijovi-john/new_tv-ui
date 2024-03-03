import React from "react";

import CategoryStripe from "./CategoryStripe";
import Rating from "./Rating";

import PlaceholderProgram from "../assets/EPG/placeholder_program.svg";
import FooterProgramEPG from "./FooterProgramEPG";

export default function ProgramEPG({ createReference }) {
  return (
    <main className="bg-zinc-800 w-full p-8 rounded-2xl">
      <div className="grid grid-cols-[3fr,2fr]">
        <div className="flex items-start gap-6">
          <Rating type={"10"} size={16} />

          <div className="text-white">
            <h4 className="text-4xl font-bold">
              Programa a seguir Radiodifusor 2
            </h4>

            <div className="text-2xl">16:30 - 17:00</div>

            <div className="mt-4">
              <CategoryStripe color={"brown"} title={"Categoria C"} />
            </div>

            <p className="text-white text-3xl mt-12">
              Resumo sobre o programa a seguir do Radiodifusor 2, tentando
              despertar o interesse do telespectador para consumir o conteúdo,
              ou no horário programado ou imediatamente, se assim o radiodifusor
              permitir
            </p>
          </div>
        </div>

        <div className="w-full flex">
          <img src={PlaceholderProgram} alt="" className="ml-auto" />
        </div>
      </div>

      <FooterProgramEPG createReference={createReference} />
    </main>
  );
}
