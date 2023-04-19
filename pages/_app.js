import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <ToastContainer />
        </>
    );
}

export default App;
