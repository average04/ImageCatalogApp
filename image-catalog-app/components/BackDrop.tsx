import { useEffect } from "react";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { hideModal } from "../slice/ModalSlice";

type BackDropType = {
  onClick: () => void;
  children?: React.ReactNode;
};

const Backdrop = ({ children, onClick }: BackDropType) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideModal());
  };

  return (
    <motion.div
      className="backdrop"
      onClick={() => handleClose()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
