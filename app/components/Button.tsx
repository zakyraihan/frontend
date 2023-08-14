import clsx from 'clsx'

type Variant = 'solid' | 'outline'
type ColorSchema = 'blue' | 'red' | 'green'


interface ButtonProps {
  title: string;
  isDisabled?: boolean;
  variant? : Variant,
  colorSchema : ColorSchema

}


const Button: React.FC<ButtonProps> = ({title, isDisabled, variant, colorSchema, ...props}) => {
   return (
     <button disabled={isDisabled} className={clsx(`w-16 h-8`, {
        "bg-blue-500 text-white solid": isDisabled === false && variant === 'solid' && colorSchema === 'blue',
        "bg-blue-200 text-white solid": isDisabled && variant === 'solid' && colorSchema === 'blue',
        "outline outline-blue-500 text-blue-500": isDisabled === false && variant === "outline" && colorSchema === 'blue',
        "outline outline-blue-100 text-blue-100": isDisabled && colorSchema === 'blue' && variant === 'outline',
        "outline outline-green-500 text-green-500": isDisabled === false && variant === 'outline' && colorSchema === 'green',
        "bg-red-200 text-white solid": isDisabled && colorSchema === 'red' &&  variant === 'solid',
        "bg-red-500 text-white solid": isDisabled === false && variant === 'solid' && colorSchema === 'red',
     })} 
     {...props}>{title}</button>
   )
}

export default Button