import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './modal.css'

const BasicModal = ({
    show=true,
    header='Modal Header',
    content='test',
    onClose,
}) => (
    <div 
        className={
            classNames(styles['modal'], {[styles['modal-hide']]: !show}, {[styles['modal-show']]: show})}>
        <div className={styles['modal-content']}>
            <div className={styles['modal-header']}>
                <button type='button' className={styles['close']} onClick={() => onClose()}>
                    <span aria-hidden='true'>&times;</span>
                </button>
                <h3>{header}</h3>
            </div>
            <div className={styles['modal-body']}>
                {content}
            </div>
            <div className={styles['modal-footer']}>
                <button type='button' className={styles['close-button']} onClick={() => onClose()}>
                    Close
                </button>
            </div>
        </div>
    </div>
)

BasicModal.propTypes = {
    show: PropTypes.bool.isRequired,
    header: PropTypes.string,
    content: PropTypes.any,
    onClose: PropTypes.func.isRequired,
}

export default BasicModal