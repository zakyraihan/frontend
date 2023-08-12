interface ButtonProps {
  title: string;
  isDisabled?: boolean;
}

const Button: React.FC<
  ButtonProps & React.InputHTMLAttributes<HTMLInputElement>> = ({ title, isDisabled = false, ...props }) => {
  return (
    <button className="w-16 h-8 rounded border bg-red-400">
      {title}
    </button>
  );
};

export default Button;
