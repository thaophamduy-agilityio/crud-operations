// Libs
import axios from "axios";

import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showPopup = (message: string) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
};

export const handleAxiosError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        // Server error (status code 400–500)
        showPopup(`API error: ${error.response?.data.message || error.message}`);
    } else {
        // Unexpected error
        showPopup(`Unexpected error: ${String(error)}`);
    }
}