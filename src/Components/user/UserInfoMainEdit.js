import UserInfoMainEditField from './UserInfoMainEditField';
import { getLocalStorage } from '../api/localStorageApi';

const UserInfoMainEdit = () => {

    const data = getLocalStorage('userInfo');

    return(
        <form className="user__edit">
            {/* <input className="user__edit-field" placeholder="Login"/>
            <input className="user__edit-field" placeholder="Name"/>
            <input className="user__edit-field" placeholder="Birthday"/>
            <input className="user__edit-field" placeholder="Live to"/> */}

            {
                Object.keys(data).map((item, index) => {
                    return <UserInfoMainEditField key={index} name={item} value={data[item]}/>
                })
            }

            <div className="user__edit-buttons">
                <button>Submit</button>
                <button>Cancel</button>
            </div>
        </form>
    )
}

export default UserInfoMainEdit;