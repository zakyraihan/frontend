import { ReactNode } from "react";
import React from 'react'

interface Container {
    nama: string
    children: ReactNode
}

const Card: React.FC<Container> = ({  nama, children  }) => {
  return (
    <div className="border-2 p-2">
        <div className="border-2 border-red-500">
            <h5 className="text-xl p-2">{nama}</h5>
        </div>
        <div className="py-3">{children}</div>
    </div>
  )
}

export default Card
