interface LabelProps {
    htmlFor: string;
    isRequired?: boolean;
    title:string
  } 
  

const Label: React.FC<LabelProps> = ({htmlFor, isRequired, title}) => {
 return (
    <div className="flex">
    <label htmlFor={htmlFor}>{title}</label>
    {
        isRequired ? (<p className="text-red-500">*</p>) : (<></>)
    }
    </div>
 )
}

export default Label