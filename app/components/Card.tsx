import { ReactNode } from "react";
import React from 'react'

interface Container {
    nama: string
    Card: ReactNode
}

const Card: React.FC<Container> = ({  nama, Card  }) => {
  return (
    <div className="border-2">
        <div className="border-2 border-red-500">
            <h5 className="text-xl">{nama}</h5>
        </div>
        <div className="py-3">{Card}</div>
    </div>
  )
}

export default Card
