import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

const Button = ({value, onClick}) => {

    const {subtheme} = useContext(ThemeContext);

    return(
        <button className={`button ${subtheme}`} onClick={onClick}>{value}</button>
    )
    
}

export default Button;