import { useState } from 'react';
import { ModalDialog } from '@components/';

const Modal = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setShow(true)}>
        Open dialog
      </button>
      <ModalDialog isOpen={show}>
        <div className="modal">
          <p>
            <strong>Hello there!</strong>
            <br />
            Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.
          </p>
          <button onClick={() => {
            setShow(false);
          }}>Close</button>
        </div>
      </ModalDialog>
    </>
  );
}

export default Modal;