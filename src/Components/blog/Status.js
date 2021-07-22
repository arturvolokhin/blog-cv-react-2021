import {useContext} from 'react';
import { setLocalStorage } from '../api/localStorageApi';
import { ThemeContext } from '../../context/ThemeProvider';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/blogSlice';

const Status = ({authorization, status, setStatus}) => {

    const statusValue = useSelector(({blog}) => blog.value.status);
    const dispatch = useDispatch();
    console.log(statusValue);

    const {text} = useContext(ThemeContext)

    const handleBlur = ({target}) => {
        dispatch(changeStatus(target.value));
    }

    const handleKeyPress = ({target, key}) => {
        if(key === 'Enter') {
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

Status.propTypes = {
    authorization: PropTypes.object,
    status: PropTypes.string,
    setStatus: PropTypes.func,
};

export default Status;