import { toastConfig } from "@/config/toastConfig";
import { toast } from "react-toastify";

export const toastService = {
    success: (message) => {
        toast.success(message, toastConfig);
    },
    warning: (message) => {
        toast.warning(message, toastConfig);
    },
    error: (message) => {
        toast.error(message, toastConfig);
    },
    info: (message) => {
        toast.info(message, toastConfig);
    },
};
