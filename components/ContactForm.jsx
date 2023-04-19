import React, { useRef } from "react";
import { useFormik } from "formik";
import { sendMessageSchema } from "@/schemas";
import { emailConfig } from "@/config/emailConfig";
import emailjs from "@emailjs/browser";
import { toastService } from "@/services/toastService";

const initialValues = {
    username: "",
    email: "",
    phonenumber: "",
    subject: "",
    message: "",
};

const ContactForm = () => {
    const form = useRef();
    const sendEmail = () => {
        emailjs
            .sendForm(
                emailConfig.serviceID,
                emailConfig.templateID,
                form.current,
                emailConfig.publicKEY
            )
            .then(
                (result) => {
                    console.log("🚀 ~ file: Contact.jsx:31 ~ sendEmail ~ result:", result);
                    toastService.success("Email sent Successfully!");
                },
                (error) => {
                    toastService.error(error.text);
                }
            );
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, handleReset } =
        useFormik({
            initialValues: initialValues,
            validationSchema: sendMessageSchema,
            onSubmit: (values) => {
                console.log(values);
                sendEmail();
                handleReset();
            },
        });

    return (
        <div>
            <form ref={form} onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">
                            Name
                            <span className="font-semibold text-base text-red-500">*</span>
                        </label>
                        <input
                            className="border-2 rounded-lg p-3 flex border-gray-300"
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Your full name"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.username && touched.username ? (
                            <p className=" text-red-600 text-sm">{errors.username}</p>
                        ) : null}
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">
                            Phone Number
                            <span className="font-semibold text-base text-red-500">*</span>
                        </label>
                        <input
                            className="border-2 rounded-lg p-3 flex border-gray-300"
                            type="text"
                            name="phonenumber"
                            id="phonenumber"
                            placeholder="Your phone number"
                            value={values.phonenumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.phonenumber && touched.phonenumber ? (
                            <p className=" text-red-600 text-sm">{errors.phonenumber}</p>
                        ) : null}
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">
                        Email
                        <span className="font-semibold text-base text-red-500">*</span>
                    </label>
                    <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your email address"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                        <p className=" text-red-600 text-sm">{errors.email}</p>
                    ) : null}
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">
                        Subject
                        <span className="font-semibold text-base text-red-500">*</span>
                    </label>
                    <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Your subject"
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.subject && touched.subject ? (
                        <p className=" text-red-600 text-sm">{errors.subject}</p>
                    ) : null}
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">
                        Message
                        <span className="font-semibold text-base text-red-500">*</span>
                    </label>
                    <textarea
                        className="border-2 rounded-lg p-3 border-gray-300"
                        name="message"
                        id="message"
                        rows="10"
                        placeholder="Write some Message . . . "
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}></textarea>
                    {errors.message && touched.message ? (
                        <p className=" text-red-600 text-sm">{errors.message}</p>
                    ) : null}
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;
