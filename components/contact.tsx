"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import SubmitBtn from "./submit-btn";
import Notifications from "./notifications";

export default function Contact() {
  const { ref } = useSectionInView("#contact");
  const [ loading, setLoading ] = useState(false)
  const [ successMessage, setSuccessMessage ] = useState("")
  const [ errorMessage, setErrorMessage ] = useState('')
  const [contactData, setContactData] = useState({
    Name: '',
    Email: '',
    Message: '',
  })

  const handleChange = (e: any) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target)

    formData.append("access_key", "e87aff9b-5349-4c04-b954-7acc473c5348")

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
        setSuccessMessage('Email sent successfully!')
        setErrorMessage("")
    }else{
      setErrorMessage('Failed to send Message!')
    }
    
    setLoading(false)
    setContactData({Name: '', Email: '', Message: ''}) // clear the form data

  }

  useEffect(() => {
    if( successMessage || errorMessage){
      const timer = setTimeout(() => {
        setSuccessMessage('')
        setErrorMessage('')
      }, 3000);

      return () => clearTimeout(timer)
    }
  }, [successMessage, errorMessage])


  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>
        {"Contact Me"}
      </SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {"Feel free to contact me directly through this form"}
      </p>

      {/* Notifications container */}
      <Notifications successMessage={successMessage} errorMessage={errorMessage}/>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
        id="myForm"
      >
        <input
          className="h-14 px-4 mb-2 rounded-lg borderBlack dark:text-white dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="Name"
          type="name"
          required
          maxLength={200}
          value={contactData.Name}
          onChange={handleChange}
          placeholder={"Your Name"}
        />

        <input
          className="h-14 px-4 rounded-lg mt-1 borderBlack dark:text-white dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="Email"
          type="email"
          required
          maxLength={500}
          value={contactData.Email}
          onChange={handleChange}
          placeholder={"Your email"}
        />
        <textarea
          className="h-52 my-3 rounded-lg resize-none borderBlack p-4 dark:text-white dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="Message"
          value={contactData.Message}
          onChange={handleChange}
          placeholder={
            "Your Message"
          }
          required
          maxLength={5000} 
        />
        <SubmitBtn text={loading ? "sending": "Submit" }  />
      </form>
    </motion.section>
  );
}
