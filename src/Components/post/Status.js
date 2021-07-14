import { setLocalStorage } from '../api/localStorageApi';

const Status = ({authorization, status, setStatus}) => {

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
                        className="post__status" 
                        onChange={({target}) => setStatus(target.value)} 
                        onBlur={handleBlur} type="text" value={status}
                        onKeyPress={handleKeyPress}
                        placeholder="This is status" maxLength="40"  
                    /> :
                    <input  
                        className="post__status" 
                        onClick={() => alert('Для редактирования - авторизируйтесь')}
                        readOnly value={status} placeholder="This is status"  
                    />
                }
            </>       
    )
}

export default Status;