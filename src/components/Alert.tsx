import React, { ReactNode } from 'react'

export default function Alert({children}: {children : ReactNode}) {
  return (
    <div className='alerta'>{children}</div>
  )
}
