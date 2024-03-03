import React from 'react'

export default function FocusableElement({ createReference, children, classNames, onClick = () => { } }) {
  return (
    <button tabIndex={0} ref={(el) => createReference(el)} className={`${classNames}`} onClick={onClick}>
      {children}
    </button>
  )
}
