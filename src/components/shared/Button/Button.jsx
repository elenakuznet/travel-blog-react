import './Button.css';

const Button = ({ children, onClick, type = 'button', className = '', disabled = false, icon}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${className}`} 
      disabled={disabled}
    >
      {children} {icon && <span className="button__icon">{icon}</span>}
    </button>
  )
}

export default Button;