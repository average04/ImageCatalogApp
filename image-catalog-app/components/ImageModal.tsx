import styles from "../styles/ImageModal.module.css";

import { motion, AnimatePresence } from "framer-motion";
import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";

import { hideModal } from "../slice/ModalSlice";

import BackDrop from "./BackDrop";

const ImageModal = () => {
  const dispatch = useDispatch();
  const header: React.ReactNode = useSelector(
    (state: RootState) => state.modal.header
  );
  const body: React.ReactNode = useSelector(
    (state: RootState) => state.modal.body
  );
  const footer: React.ReactNode = useSelector(
    (state: RootState) => state.modal.footer
  );

  const handleClose = () => {
    dispatch(hideModal());
  };

  return (
    <BackDrop onClick={() => null}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.container}
      >
        <div className={styles.modal}>
          <div className={styles.header}>{header}</div>
          <br />
          <div className={styles.body}>{body}</div>
          <br />
          <div className={styles.footer}>
            {footer}
            <div className={styles.btn_group}>
              <button className={styles.btn} onClick={() => handleClose()}>
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </BackDrop>
  );
};

export default ImageModal;
