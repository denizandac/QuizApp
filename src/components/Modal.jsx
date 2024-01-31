import { createPortal } from "react-dom";
import { forwardRef } from "react";

const Modal = forwardRef(({ children }, ref) => {
  return createPortal(
    <dialog ref={ref} className="modal">
      {children}
      <button onClick={() => ref.current.close()}>Close</button>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
