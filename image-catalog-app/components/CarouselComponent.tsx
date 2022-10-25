import { useState } from "react";

import styles from "../styles/CarouselComponent.module.css";

import {
  toggleFilter,
  toggleFilterDirection,
  sortImages,
} from "../slice/ImageSlice";
import {
  showModal,
  hideModal,
  setHeader,
  setBody,
  setFooter,
} from "../slice/ModalSlice";

import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { IImage } from "../slice/types";
import CarouselItem from "./CarouselItem";

import { AiOutlineSortAscending } from "react-icons/ai";
import { AiOutlineSortDescending } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 365 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 364, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const iconStyle = {
  color: "black",
  fontSize: "20pt",
  backgroundColor: "white",
  borderRadius: "5pt",
  cursor: "pointer",
};

const CarouselComponent = () => {
  const dispatch = useDispatch();

  const handleClose = () => dispatch(hideModal());
  const handleOpen = () => {
    dispatch(setHeader(<h1>Upload an Image</h1>));
    dispatch(setBody(<h2>Inputs here</h2>));
    dispatch(showModal());
  };

  const images: IImage[] = useSelector(
    (state: RootState) => state.image.images
  );
  const filter: "Name" | "Date" = useSelector(
    (state: RootState) => state.image.filter
  );
  const filterDirection: "asc" | "desc" = useSelector(
    (state: RootState) => state.image.filterDirection
  );

  const handleToggleFilter = () => {
    dispatch(toggleFilter());
    dispatch(sortImages());
  };

  const handleToggleFilterDirection = () => {
    dispatch(toggleFilterDirection());
    dispatch(sortImages());
  };

  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <div className={styles.filters}>
          <motion.label
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={styles.upload}
            style={{ marginRight: "5pt" }}
            onClick={() => handleOpen()}
          >
            + Upload
          </motion.label>
          {/* <button onClick={() => handleClose()}>Close Modal</button> */}
          <motion.label
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={styles.sort_by}
            style={{ marginRight: "5pt" }}
            onClick={() => handleToggleFilter()}
          >
            Sort by {filter}{" "}
          </motion.label>
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            {filterDirection === "asc" ? (
              <AiOutlineSortAscending
                style={iconStyle}
                onClick={() => handleToggleFilterDirection()}
              />
            ) : (
              <AiOutlineSortDescending
                style={iconStyle}
                onClick={() => handleToggleFilterDirection()}
              />
            )}
          </motion.div>
        </div>
        <AnimatePresence>
          <div className={styles.carousel_wrap}>
            <Carousel ssr className={styles.carousel} responsive={responsive}>
              {images.map((image, i) => {
                return <CarouselItem image={image} />;
              })}
            </Carousel>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CarouselComponent;
