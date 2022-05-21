import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { store } from "../app/store";
import { AppProps } from "next/app";

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
