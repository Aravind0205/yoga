import { SidebarProvider } from "../context/SidebarContext";
import store from "../redux/store";
import "../styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </SidebarProvider>
  );
}
