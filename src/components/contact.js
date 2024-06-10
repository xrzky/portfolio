"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Contact = () => {
  const { t } = useTranslation();
  const [successMessage, setSuccessMessage] = useState("");

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name must be filled in").min(3).max(30),
    email: Yup.string()
      .required("Email must be filled in")
      .email("Invalid email address"),
    message: Yup.string().required("Message must be filled in").min(5),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    axios.defaults.headers.post["Content-Type"] = "text/plain";
    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbxUTthGshtI-yt61iyuU2VscULtwWVbvkQ3xj4P5exAmQ9HNa0vXwUXzYt7Z7_IkUvZ/exec",
        values
      );
      setSuccessMessage("Form submitted successfully");
      resetForm();
    } catch (error) {
      console.log("error", error);
    }
    setSubmitting(false);
  };

  return (
    <footer
      id="contact"
      className="container flex flex-col md:flex-row w-full md:min-h-[400px] min-h-screen pt-20"
    >
      <div className="flex flex-col justify-between w-full p-8 text-left bg-white md:w-1/2 ">
        <div className="px-4 mx-auto text-center max-w-96">
          <h2 className="text-2xl font-bold">{t("contact.startProject")}</h2>
        </div>
        <div className="px-4 py-4 mx-auto text-center max-w-96">
          <p className="text-lg">{t("contact.description")}</p>
        </div>
        <div className="flex flex-row max-w-6xl px-4 py-4 mx-auto">
          <div className="flex space-x-6">
            <Link href="mailto:lukirizkii18@gmail.com" target="_blank">
              <MdEmail className="text-black" size={24} />
            </Link>
            <Link href="https://x.com/warung_premium" target="_blank">
              <FaSquareXTwitter className="text-black" size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/luki-rizki-708399246/"
              target="_blank"
            >
              <FaLinkedin className="text-black" size={24} />
            </Link>
            <Link href="https://github.com/xrzky" target="_blank">
              <FaGithub className="text-black" size={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full p-8 text-left bg-black md:w-1/2">
        <div className="max-w-5xl mx-auto lg:max-w-md">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-white">
              {t("contact.form.title")}
            </h2>
            <p className="text-lg text-white">{t("contact.social")}</p>
          </div>
          <div className="p-8 mt-4 bg-white rounded-lg">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="w-full md:w-1/2">
                      <Field
                        type="text"
                        className="w-full p-2 text-black rounded-md bg-light-grey"
                        placeholder={t("contact.form.namePlaceholder")}
                        name="name"
                      />
                      <ErrorMessage
                        name="name"
                        component="p"
                        className="ml-3 text-xs text-red"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <Field
                        type="email"
                        className="w-full p-2 mt-4 text-black rounded-md bg-light-grey md:mt-0"
                        placeholder={t("contact.form.emailPlaceholder")}
                        name="email"
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="ml-3 text-xs text-red"
                      />
                    </div>
                  </div>
                  <div>
                    <Field
                      as="textarea"
                      className="w-full p-2 text-black rounded-md bg-light-grey"
                      placeholder={t("contact.form.messagePlaceholder")}
                      rows="4"
                      name="message"
                    />
                    <ErrorMessage
                      name="message"
                      component="p"
                      className="ml-3 text-xs text-red"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full p-2 text-white bg-black rounded-md"
                  >
                    {isSubmitting
                      ? t("contact.form.sendingButton")
                      : t("contact.form.sendButton")}
                  </button>
                  <p className="mt-4 text-center text-green">
                    {successMessage}
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
