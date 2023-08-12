import React from 'react'
import { ReactNode } from 'react'

interface Cards {
    title: string
    subtitle: string
    desc?: string
    children: ReactNode
}

const Card: React.FC<Cards> = ({ title, subtitle, desc, children, ...props }) => {
  return (
    <>
      <div className='border-2 p-3'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className='border-2 '>
            <p>{children}</p>
        </div>
      </div>
    </>
  )
}

export default Card

