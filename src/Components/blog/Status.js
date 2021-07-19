import {useContext} from 'react';
import { setLocalStorage } from '../api/localStorageApi';
import { ThemeContext } from '../../context/ThemeProvider';

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
                    className={`blog__status ${text}`} 
                    onClick={() => alert('Для редактирования - авторизируйтесь')}
                    readOnly value={status} placeholder="This is status"  
                />
            }
        </>  
    )
}

export default Status;