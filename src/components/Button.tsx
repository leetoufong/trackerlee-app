interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
}

const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
    const baseStyles = 'px-4 py-2 rounded font-medium transition-colors focus:outline-none';
    const variantStyles = {
        primary: 'bg-blue-500 text-white p2 rounded hover:bg-blue-600',
        secondary: 'bg-gray-200 text-gray-800 p2 rounded hover:bg-gray-300',
        danger: 'bg-red-500 text-white p2 rounded hover:bg-red-600',
    }
    
    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button