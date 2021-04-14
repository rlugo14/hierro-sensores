import { AppProps } from "next/dist/next-server/lib/router/router";
import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { store } from "../app/store";

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
