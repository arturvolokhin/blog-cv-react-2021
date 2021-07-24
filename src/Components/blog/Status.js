import {useContext} from 'react';
import { setLocalStorage } from '../../utils/localStorage';
import { ThemeContext } from '../../context/ThemeProvider';
import PropTypes from 'prop-types';

const Status = ({authorization, status, setStatus}) => {

    const {text} = useContext(ThemeContext)

    const handleBlur = ({target}) => {
        setLocalStorage('status', target.value);
    }

    const handleKeyPress = ({target, key}) => {
        if(key === 'Enter') {
            setLocalStorage('status', target.value);
            target.blur();
        }
    }
 
    return(
        <>
            {authorization ?
                <input 
                    className={`blog__status ${text}`} 
                    onChange={({target}) => setStatus(target.value)} 
                    onBlur={handleBlur} type="text" value={status}
                    onKeyPress={handleKeyPress}
                    placeholder="This is status" maxLength="40"  
                /> :
                <input  
                    className={`blog__status-uneditable ${text}`} 
                    readOnly value={status} placeholder="This is status"  
                />
            }
        </>  
    )
}

Status.propTypes = {
    authorization: PropTypes.object,
    status: PropTypes.string,
    setStatus: PropTypes.func,
};

export default Status;