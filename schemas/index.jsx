import * as y from "yup";

export const sendMessageSchema = y.object({
    username: y.string().min(3).max(25).required("Please enter your full name"),
    email: y.string().email().required("Please enter your email"),
    message: y.string().required("Please enter your message"),
    subject: y.string().required("Please enter your subject"),
    phonenumber: y.number().required("Please enter your phone number"),
});
