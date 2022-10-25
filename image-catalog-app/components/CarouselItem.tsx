import styles from "../styles/CarouselItem.module.css";
import { useState } from "react";

import { setBody, showModal, setHeader, setFooter } from "../slice/ModalSlice";

import { useSelector, useDispatch } from "react-redux";
import { IImage } from "../slice/types";
import Moment from "react-moment";
import { motion, AnimatePresence, MotionStyle } from "framer-motion";

const CarouselItem = ({ image }: { image: IImage }) => {
  const dispatch = useDispatch();
  const [enlarge, setEnlarge] = useState(false);

  const handleEnlarge = (e: any) => {
    if (e.detail === 2) {
      dispatch(
        setHeader(
          <div style={{ marginLeft: "10pt" }}>
            <h3>{image.name}</h3>
            <div
              style={{
                width: "300pt",
                display: "flex",
                justifyContent: "center",
                overflowWrap: "break-word",
              }}
            >
              {image.description}
            </div>
          </div>
        )
      );
      dispatch(
        setBody(
          <img
            draggable={false}
            className={styles.c_image}
            src={image.path}
            style={{ width: "400pt", height: "400pt", cursor: "auto" }}
          />
        )
      );
      dispatch(setFooter(<></>));

      dispatch(showModal());
    }
  };

  // const handleEnlarge = (e: any) => {
  //   if (e.detail === 2) {
  //     setEnlarge(!enlarge);
  //   }
  // };

  const enlargeStyle: MotionStyle = {
    zIndex: 9000000,
    position: "absolute",
    top: 0,
    left: 0,
  };
  return (
    <motion.div
      initial={{ y: 300, opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={styles.image_wrap}
        whileHover={{ scale: 1.1 }}
        onClick={(e) => handleEnlarge(e)}
      >
        <div className={styles.border}>
          <motion.img
            draggable={false}
            className={!enlarge ? styles.c_image : ""}
            src={image.path}
            style={enlarge ? enlargeStyle : {}}
          />
        </div>
        <div className={styles.header_text}>{image.name}</div>
        <div className={styles.date_badge}>
          <Moment format="MMM DD yyyy">{image.date}</Moment>
        </div>
        <div className={styles.description}>{image.description}</div>
      </motion.div>
    </motion.div>
  );
};

export default CarouselItem;
