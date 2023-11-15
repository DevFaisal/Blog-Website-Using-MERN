import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const showToastMessage = (message, isError = false) => {
    toast[isError ? "error" : "success"](message, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
    });
};

export default showToastMessage;