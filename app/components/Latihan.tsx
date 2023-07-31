import React from 'react'

interface Props {
    name: string
    userName: string
    age: number
    isVerified: boolean
}

export default function Latihan(props: Props) {
  return (
    <div className='container border-2 my-5 p-3'>
      <dl>
        <dt>Name: </dt>
        <dd>{props.name}</dd>
        <dt>Username: </dt>
        <dd>{props.userName}</dd>
        <dt>Age: </dt>
        <dd>{props.age}</dd>
        <dt>Verified: </dt>
        <dd>{props.isVerified ? "yes" : "no"}</dd>
      </dl>
    </div>
  )
}
