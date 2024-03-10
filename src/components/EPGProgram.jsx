import { useNavigate } from "react-router-dom"

import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { LuDownload } from "react-icons/lu";

// import RadiodifusorIcon from "../assets/radiodifusor_icon.svg";
import { MdOutlineMonitor } from "react-icons/md";

import { indicacoes } from "../configs/indicacoes";
import ScaleFocusHover from "./ScaleFocusHover";

export default function EPGProgram({ index, item, createReference }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/EPG-InfoDTV", {
      state: {
        title: "",
        summary: "",
        blocked: "",
        rating: "",
        banner: "",
        startTime: "",
        endTime: "",
        downloadable: "",
        genre: "",
        availableUntil: "",
        videoProgram: "",
        broadcaster: "",
        isLive: "",
        isOnAir: "",
        advice: ""
      }
    })
  }

  return (
    <div className="flex flex-row justify-center align-center h-[200px] rounded-lg w-full">
      <div className="h-full mx-5 ">
        <ScaleFocusHover
          classNames={"flex items-center justify-center flex-col p-4 rounded-lg"}
          createReference={createReference}
        >
          <MdOutlineMonitor size={120} className="text-zinc-400" />
          <span className="text-white text-3xl mt-5">
            Radiodifusor {index + 1}
          </span>
        </ScaleFocusHover>
      </div>

      <ScaleFocusHover
        classNames="flex flex-col items-center justify-center  mx-5 rounded-lg "
        createReference={createReference}
      >
        <BsChevronLeft size={50} className="text-white cursor-pointer" />
      </ScaleFocusHover>

      <div className="flex flex-1 h-full ">
        {item.map((programa, indexPrograma) => {
          return (
            <ScaleFocusHover
              key={indexPrograma}
              onClick={() => handleClick()}
              createReference={createReference}
              classNames={"flex p-3 bg-zinc-700 rounded-lg mx-5 flex-1 flex-col items-center justify-between"}
            >
              {/* header content */}
              <div className="flex w-full flex-row items-center gap-2 ">
                <img
                  src={indicacoes[programa.indicacao]}
                  className="w-8 h-8"
                  alt=""
                />

                <span className="text-white cursor-default">
                  {programa.inicio} - {programa.termino}
                </span>

                {programa.onAir && (
                  <div className="bg-red-700 text-white py-[0.125rem] px-4 cursor-default">
                    NO AR
                  </div>
                )}

                {programa.live && (
                  <div className="text-red-600 font-medium ml-auto bg-white px-4 py-[0.125rem] uppercase cursor-default">
                    ao vivo
                  </div>
                )}
              </div>

              <div className="text-2xl font-bold text-zinc-300 cursor-default">
                {programa.content}
              </div>

              {programa.type === "serie" && (
                <span className="text-zinc-300 cursor-default">
                  {programa.serieName}
                </span>
              )}

              {programa.resumo && (
                <span className="text-lg text-zinc-400 mx-2 cursor-default">
                  {programa.resumo}
                </span>
              )}

              {/* footer */}
              <div className="flex w-full flex-row items-center gap-2">
                {programa.starred ? (
                  <AiFillStar size={20} fill="#ffdf00" />
                ) : (
                  <AiOutlineStar size={20} fill="#aaa" />
                )}

                {programa.downloadable & !programa.downloaded ? (
                  <LuDownload size={20} className="text-zinc-400 " />
                ) : programa.downloaded ? (
                  <LuDownload size={20} className="text-[#ffdf00]" />
                ) : (
                  <></>
                )}

                {programa.advice && (
                  <div className=" cursor-default ml-auto px-3 py-[0.125rem] bg-green-800 text-white font-medium">
                    {programa.advice}
                  </div>
                )}
              </div>

            </ScaleFocusHover>
          );
        })}
      </div>

      <ScaleFocusHover createReference={createReference} classNames={"flex flex-col items-center justify-center text-white"}>
        <BsChevronRight size={50} />
      </ScaleFocusHover>
    </div>
  );
}
