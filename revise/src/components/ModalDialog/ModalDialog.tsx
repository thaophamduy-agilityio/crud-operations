import { useEffect, useRef } from 'react';

interface ModalDialogProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const ModalDialog = ({ isOpen, children }: ModalDialogProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog = ref.current;
    dialog?.showModal();
    return () => {
      dialog?.close();
    };
  }, [isOpen]);

  return <dialog ref={ref}>{children}</dialog>;
}

export default ModalDialog;