import PropTypes from 'prop-types';

const UserInfoMainField = ({name, value}) => {
    return(
        <li className="user__info-item">
            <span>{name}</span> <span className="user__info-item--data">{value}</span>
        </li>
    )
}

UserInfoMainField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
};

export default UserInfoMainField;