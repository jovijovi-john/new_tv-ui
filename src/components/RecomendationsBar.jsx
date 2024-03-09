import React from 'react'
import RadiodifusorCard from './RadiodifusorCard'

import GloboIcon from "../assets/emissoras/Globo.svg"
import { emissoras } from '../configs/emissoras'

export default function RecomendationsBar({ recomendations, createReference }) {
  console.log(recomendations)

  return (
    <div className='overflow-x-scroll w-full '>
      <div className='p-4 h-56 flex items-center gap-4 mt-4 overflow-y-hidden'>
        {recomendations.map((recomendation, index) => {
          return (
            <RadiodifusorCard
              classNames={"h-full w-[350px]"}
              createReference={createReference}
              key={index}
              icon={emissoras[recomendation].icon}
            />
          )
        })}
      </div>
    </div>
  )
}
