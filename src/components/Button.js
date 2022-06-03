const Button = ({handleClick, isActive, label}) => {
    return (
        <button onClick={handleClick} className={`${isActive ? 'active' : 'primary'}`}>{label}</button>
    )
}
export default Button;