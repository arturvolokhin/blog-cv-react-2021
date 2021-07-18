import { ThemeContext } from '../context/ThemeProvider';

const Button = ({value, onClick}) => {
    return(
        <ThemeContext>
            {context => (
                <button className={`button ${context.subtheme}`} onClick={onClick}>{value}</button>
            )}
        </ThemeContext>
    )
    
}

export default Button;