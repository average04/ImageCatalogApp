import "../styles/globals.css";
import "react-multi-carousel/lib/styles.css";

import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
