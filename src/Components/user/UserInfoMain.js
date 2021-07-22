import UserInfoMainField from "./UserInfoMainField";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const UserInfoMain = ({ toggleUserInfoEdit, authorization }) => {
    const userInfo = useSelector(({user}) => user.userInfo);
    console.log(userInfo)

    return (
        <article className="section user__info">
            {authorization.login === 'admin' && (
                <p className="user__info-edit" onClick={toggleUserInfoEdit}>
                    Edit
                </p>
            )}
            <h2 className="subtitle">Main information</h2>
            <ul className="user__info-content">
                {Object.entries(userInfo).map(([key, value], index) => {
                    return (
                        <UserInfoMainField
                            key={index}
                            name={key}
                            value={value}
                        />
                    );
                })}
            </ul>
        </article>
    );
};

UserInfoMain.propTypes = {
    toggleUserInfoEdit: PropTypes.func,
    authorization: PropTypes.object,
};

export default UserInfoMain;
