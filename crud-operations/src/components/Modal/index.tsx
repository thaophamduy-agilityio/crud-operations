// Libs
import { JSX, PropsWithChildren } from 'react';

// Interfaces
interface ModalProps extends PropsWithChildren {};

const Modal = (({children}: ModalProps): JSX.Element => {
    return (
        <>
            {children}
        </>
    );
});

export default Modal;