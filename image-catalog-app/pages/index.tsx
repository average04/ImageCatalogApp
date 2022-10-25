import type { NextPage } from "next";
import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";

import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "../components/Header";
import CarouselComponent from "../components/CarouselComponent";

import ImageModal from "../components/ImageModal";

const Home: NextPage = () => {
  const show: boolean = useSelector((state: RootState) => state.modal.show);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        />
        <title>Image Catalog - Jay-R Bayog</title>
      </Head>
      {show && <ImageModal />}
      <Header />

      <div className={styles.container}>
        <CarouselComponent />
      </div>
    </>
  );
};

export default Home;
