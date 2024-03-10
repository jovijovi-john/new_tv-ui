import React from "react";
import { useNavigate } from "react-router-dom"

import IconLeftTextRight from "./IconLeftTextRight";
import BorderedIcon from "./BorderedIcon";

import { FaRegStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";


export default function FooterProgramEPG({ createReference, programa }) {
  const navigate = useNavigate()

  function handleNavigateInfoDTV(programa) {
    navigate("/InitialApp", {
      state: {
        programa: programa
      }
    })
  }

  return (
    <div className="flex items-center mt-16">
      <div className="flex gap-8">
        <IconLeftTextRight createReference={createReference}>
          <BorderedIcon color={"#ffd000"}>
            <FaRegStar size={76} />
          </BorderedIcon>

          <p className="text-left">
            Adicionar
            <br />
            aos favoritos
          </p>
        </IconLeftTextRight>

        <IconLeftTextRight createReference={createReference} onClick={() => handleNavigateInfoDTV(programa)}>
          <BorderedIcon color={"#00ce78"}>
            <FaCirclePlay size={76} />
          </BorderedIcon>

          <p className="text-left">
            Assistir
            <br />
            agora
          </p>
        </IconLeftTextRight>

        <IconLeftTextRight createReference={createReference}>
          <BorderedIcon color={"#00aeff"}>
            <MdOutlineFileDownload size={76} />
          </BorderedIcon>

          <p>
            Download
            <br />
            Disponível
          </p>
        </IconLeftTextRight>
      </div>

      <p className="ml-auto text-zinc-100 text-3xl">
        Streaming disponível até 24/11/2024
      </p>
    </div>
  );
}
