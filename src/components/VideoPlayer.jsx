import React from 'react'

export default function VideoPlayer({ classNames, programa }) {


  return (
    programa.video &&
    <iframe
      className={classNames}
      src={`${programa.video}/?controls=0&autoplay=1&loop=1`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>


  )
}
