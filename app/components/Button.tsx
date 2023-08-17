import clsx from 'clsx'

type Variant = 'solid' | 'outline'
type ColorSchema = 'blue' | 'red' | 'green'


interface ButtonProps {
  title: string;
  isDisabled?: boolean;
  variant? : Variant,
  colorSchema : ColorSchema
}


const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({title, isDisabled, variant, colorSchema, ...props}) => {
   return (
     <button disabled={isDisabled} className={clsx(`px-10 h-8`, {
        "bg-blue-600 text-white solid": variant === 'solid' && colorSchema === 'blue',
        "bg-blue-400  text-white solid": variant === 'solid' && colorSchema === 'blue',
        "outline outline-blue-600 text-blue-600": variant === "outline" && colorSchema === 'blue',
        "outline outline-blue-200 text-blue-100": colorSchema === 'blue' && variant === 'outline',
        "outline outline-green-600 text-green-600": variant === 'outline' && colorSchema === 'green',
        "bg-red-600 text-white solid": colorSchema === 'red' &&  variant === 'solid',
        "bg-red-500 text-white solid": variant === 'solid' && colorSchema === 'red',
        'opacity-20': isDisabled
     })} 
        {...props}
     >{title}</button>
   )
}

export default Button