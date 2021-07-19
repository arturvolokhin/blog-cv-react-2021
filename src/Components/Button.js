import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import PropTypes from 'prop-types';

const Button = ({value, onClick}) => {

    const {subtheme} = useContext(ThemeContext);

    return(
        <button className={`button ${subtheme}`} onClick={onClick}>{value}</button>
    )
    
}

Button.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;