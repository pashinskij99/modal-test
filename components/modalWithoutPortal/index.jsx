import React from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";
import {inter} from "../../pages";

const ModalWithoutPortal = ({title, children, onClose, show}) => {
    return (
        show && <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalWrapper} onClick={e => e.stopPropagation()}>
                <div className={styles.modal} >
                    <div className={styles.modalHeader}>
                        <button href="#" onClick={onClose}>
                            x
                        </button>
                    </div>
                    {title && <h1 className={clsx(inter.className, styles.modalTitle) }>{title}</h1>}
                    <div className={styles.modalBody}>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default ModalWithoutPortal;
