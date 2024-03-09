import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Profile from "../../components/Profile";
import InitialAppContent from "../../components/InitialAppContent";
import Header from "../../components/Header";
import Page from "../../components/Page";

import keyMapping from "./keyMapping";
import FooterInitialApp from "../../components/FooterInitialApp";

// Array de refs

export default function InitialApp() {
  const refs = useRef([]);

  // Utilizado para navegar entre as rotas da aplicação
  const navigate = useNavigate();

  // Variável para rastrear a div com foco
  let focusIndex = 0;

  // Acionado quando um elemento do array de referências é focado
  function handleFocus(el) {
    // Tem que converter pra número, porque o id vem como string
    // Assim previnirá erros de "8" + 1 == 81

    if (el) {
      focusIndex = Number(el.id);
      console.log(el);
    }
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
        ArrowDown: 1,
        ArrowLeft: -1,
        ArrowRight: 1,
      };
    }

    if (keysFunctions[keyPressed.code]) {
      keyPressed.preventDefault();

      let newFocus;

      switch (keyPressed.code) {
        case "ArrowUp":
          // Se o foco está no footer
          if (focusIndex >= 2) {
            newFocus = 1
          } else {
            newFocus = 0
          }
          break;

        default:
          newFocus = focusIndex + keysFunctions[keyPressed.code];
      }


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

  return (
    <Page>
      <Header>
        <Profile createReference={createReference} />
      </Header>

      <InitialAppContent createReference={createReference} />

      <FooterInitialApp createReference={createReference} />
    </Page>
  );
}
