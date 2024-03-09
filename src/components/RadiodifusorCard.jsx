import React from 'react'
import { emissoras } from '../configs/emissoras'
import ScaleFocusHover from './ScaleFocusHover'

export default function RadiodifusorCard({ classNames, icon, createReference }) {
  return (
    <ScaleFocusHover createReference={createReference} classNames={`shrink-0 rounded-3xl overflow-hidden ${classNames}`}>
      <img src={icon} alt="" className='object-cover w-full h-full' />
    </ScaleFocusHover>
  )
}
