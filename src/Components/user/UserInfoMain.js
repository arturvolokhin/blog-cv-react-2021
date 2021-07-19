import { getLocalStorage } from '../api/localStorageApi';
import UserInfoMainField from './UserInfoMainField';
import PropTypes from 'prop-types';

const UserInfoMain = ({toggleUserInfoEdit, authorization}) => {

    const handleClick = () => {
        authorization ? toggleUserInfoEdit() : alert('Для редактирования - авторизируйтесь!');
    }

    const data = getLocalStorage('userInfo');
    
    return(
        <article className="section user__info">
            <p className="user__info-edit" onClick={handleClick}>Edit</p>
            <h2 className="subtitle">Main information</h2>
            <ul className="user__info-content">
                {
                    Object.entries(data).map(([key, value], index) => {
                        return <UserInfoMainField key={index} name={key} value={value}/>
                    })
                }
            </ul>
        </article>
    )
}

UserInfoMain.propTypes = {
    toggleUserInfoEdit: PropTypes.func,
    authorization: PropTypes.object,
};

export default UserInfoMain;