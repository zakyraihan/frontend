interface Props {
    name: string
    userName: string
    age: number
    isVerified: boolean
}

function Latihan(props: Props) {
    return (
       <>
        <h1>nama: {props.name}</h1>
        <h1>userName: {props.userName}</h1>
        <h1>age: {props.age}</h1>
        <h1>isVerified?: {props.isVerified ? 'yes' : 'no'}</h1>
       </>
    )
}

export default Latihan