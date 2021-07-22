import React from 'react';
import ModalLogin from './ModalLogin';
import ModalRegistration from './ModalRegistration';
import PropTypes from 'prop-types';

const Modals = () => {

    return(
        <>
            <ModalLogin/>
            <ModalRegistration/>
        </>
    )
}

Modals.propTypes = {
    setAuthorization: PropTypes.func,
    toggleLoginModal: PropTypes.func,
    isLoginModal: PropTypes.bool,
};

export default Modals;