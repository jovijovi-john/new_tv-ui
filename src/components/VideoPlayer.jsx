import React from 'react'

export default function VideoPlayer({ classNames }) {
  return (
    <iframe
      className={classNames}
      src="https://www.youtube.com/embed/TSNrP06lCZY?si=ZNsUhIjJe_dpF9Jc?controls=0&autoplay=1&loop=1"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  )
}
