import { setLocalStorage } from '../api/localStorageApi';

const Status = ({authorization, status, setStatus}) => {

    const handleBlur = ({target}) => {
        setLocalStorage('status', target.value);
    }
 
    return(
        // <article className="post__status">
            <>
                {authorization ?
                    <input className="post__status" 
                        onChange={({target}) => setStatus(target.value)} 
                        onBlur={handleBlur} type="text" value={status}
                        placeholder="This is status" maxlength="40"  
                        /> :
                    <input  className="post__status"
                        readOnly value={status} placeholder="This is status"/>
                }
            </>       
        // </article>
    )
}

export default Status;