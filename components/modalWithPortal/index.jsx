import {useEffect, useState} from 'react'
import { createPortal } from 'react-dom'
import styles from './styles.module.scss'
import {inter} from '../../pages'
import clsx from 'clsx'

const ModalWithPortal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const modalContent = show ? (
        <div className={styles.modalOverlay} onClick={onClose}>
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
    ) : null

    if (isBrowser) {
        // console.log(document.getElementById("modalWithPortal-root"), show)
        return createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
}

export default ModalWithPortal;
