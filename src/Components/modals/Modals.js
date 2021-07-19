import React, {useState} from 'react';
import ModalLogin from './ModalLogin';
import ModalRegistration from './ModalRegistration';
import PropTypes from 'prop-types';

const Modals = ({setAuthorization, toggleLoginModal, isLoginModal}) => {
    const [isRegistrationModal, setIsRegistrationModal] = useState(false);
    

    const toggleRegistrationModal = () => {
        setIsRegistrationModal(!isRegistrationModal);
    }    

    return(
        <>
            <ModalLogin 
                isLoginModal={isLoginModal} 
                toggleLoginModal={toggleLoginModal}
                setAuthorization={setAuthorization}
                toggleRegistrationModal={toggleRegistrationModal}
            />
            <ModalRegistration
                toggleLoginModal={toggleLoginModal}
                isRegistrationModal={isRegistrationModal}
                toggleRegistrationModal={toggleRegistrationModal}
            />
        </>
    )
}

Modals.propTypes = {
    setAuthorization: PropTypes.func,
    toggleLoginModal: PropTypes.func,
    isLoginModal: PropTypes.bool,
};

export default Modals;