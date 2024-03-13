import React, { useState, useEffect, useRef } from "react";


import { useNavigate } from "react-router-dom";

import Page from "../../components/Page";
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import SearchBar from "../../components/SearchBar";
import FooterEpg from "../../components/FooterEpg";

// import programas from "../../configs/contentRadiodifusoresEPG";

import { emissoras } from "../../configs/emissoras";

// Arquivo contendo o mapeamento das teclas referente às rotas da aplicação
import keyMapping from "./keyMapping";
import EPGProgramTimeline from "../../components/EPGProgramTimeline";
import ProgramDynamicSize from "../../components/ProgramDynamicSize";

export default function EPGTimeline() {
  // Array de refs
  const refs = useRef([]);

  // Utilizado para navegar entre as rotas da aplicação
  const navigate = useNavigate();

  // Variável para rastrear a div com foco
  let focusIndex = 0;

  const emissorasValues = Object.values(emissoras)

  // Acionado quando um elemento do array de referências é focado
  function handleFocus(el) {
    // Tem que converter pra número, porque o id vem como string
    // Assim previnirá erros de "8" + 1 == 81
    focusIndex = Number(el.id);
    console.log(el);
  }

  // Função utilizada para criar uma referência do elemento
  function createReference(el) {
    // Atualmente, ela conta quantos elementos têm no array de refs, e coloca o elemento na ultima posição com o id == len(refs)

    if (el) {
      el.id = refs.current.length;
      el.onfocus = () => handleFocus(el);
      refs.current.push(el);
    }
  }

  // Função para gerenciar eventos do teclado e mapeá-los para a função handleFocusElement
  function handleKeyDown(key) {
    if (!keyMapping[key.code]) {
      return handleFocusElement(key);
    }

    return navigate(`/${keyMapping[key.code]}`);
  }

  // Função utilizada para navegação pelo teclado
  function handleFocusElement(keyPressed, keysFunctions) {
    if (!keysFunctions) {
      keysFunctions = {
        ArrowUp: -6,
        ArrowDown: 6,
        ArrowLeft: -1,
        ArrowRight: 1,
      };
    }

    if (keysFunctions[keyPressed.code]) {
      keyPressed.preventDefault();

      let newFocus = focusIndex + keysFunctions[keyPressed.code];

      if (newFocus < 0) {
        newFocus = 0;
      } else if (newFocus >= refs.current.length) {
        newFocus = refs.current.length - 1;
      }

      refs.current[newFocus].focus();
    }
  }

  // Acionado quando o componente for renderizado pela primeira vez
  useEffect(() => {
    // Focando o primeiro elemento assim que a tela carregar
    if (refs.current) {
      refs.current[0].focus();
    }

    // Adicionando o listener do teclado
    window.onkeydown = handleKeyDown;
  }, []);

  let schedules = [
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "22:30",
    "23:00",
    "23:30",
    "00:00",
  ]

  return (
    <Page>
      <Header profileIconVisible={true}>
        <SearchBar createReference={createReference} />
        <Profile createReference={createReference} />
      </Header>

      <main className="flex-1 bg-zinc-800 p-4 rounded-lg w-full overflow-y-scroll h-full relative">
        {/* <div className="grid grid-cols-[3fr,15fr] bg-blue-500">

          <div></div>


        </div> */}

        <div className="grid grid-cols-[300px,1fr] grid-rows-[80px,1fr]  h-full">

          {/* -------------------------------- HEADER --------------------------------------------------- */}
          <div>
          </div>

          <div className="flex w-full pl-16">
            {schedules.map((schedule, index) => {
              return (
                <div className="w-[200px] relative">
                  <div className="relative -left-[9%] text-2xl text-white">{schedule}h</div>

                  <div className="flex">
                    <div className="w-1 bg-zinc-200 h-4"></div>
                    <div className="w-full h-1 bg-zinc-200 border-l-4 border-l-zinc-200 mt-auto">
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* -------------------------------- EMISSORAS --------------------------------------------------- */}

          <div className="flex flex-col h-full gap-2 ">

            {emissorasValues.map((emissora, index) => {
              return (
                <div className="w-full h-[200px] overflow-hidden rounded-3xl">
                  <img src={emissora.icon} alt="" className="h-full w-full object-cover" />
                </div>)
            })}



          </div>

          {/* -------------------------------- PROGRAMAS --------------------------------------------------- */}
          <div className="pl-16 overflow-x-hidden">
            <div className="flex flex-col gap-2 ">
              {emissorasValues.map((emissora, indexEmissora) => {
                return <div className="h-[200px]  w-full ">
                  <div className="flex h-full gap-1 ">
                    {emissora.programs.map((programa, indexPrograma) => {
                      return (
                        <ProgramDynamicSize programa={programa} createReference={() => { }} onClick={() => { }} />
                      )
                    })}
                  </div>
                </div>
              })}


            </div>
          </div>
        </div>
      </main>

      <FooterEpg createReference={createReference} />
    </Page>
  );
}
