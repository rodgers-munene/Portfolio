"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import SubmitBtn from "./submit-btn";
import { SendEmail } from "@/utils/sendEmail";
import Notifications from "./notifications";

export default function Contact() {
  const { ref } = useSectionInView("#contact");
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState("")
  const [ loading, setLoading ] = useState(false)
  const [ successMessage, setSuccessMessage ] = useState("")
  const [ errorMessage, setErrorMessage ] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await SendEmail(email, message);
      setSuccessMessage('Email sent successfully!')
      setErrorMessage("")
      console.log(successMessage)

    } catch (error) {
      setErrorMessage('Failed to send Message');
      console.error(error)

    }finally {
      setLoading(false)
    }
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
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={"Your email"}
          onChange={ (e) => setEmail(e.target.value)}
        />
        <textarea
          className="h-52 my-3 rounded-lg resize-none borderBlack p-4 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="message"
          placeholder={
            "Your Message"
          }
          required
          maxLength={5000}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn text={loading ? "sending": "Submit"}  />
      </form>
    </motion.section>
  );
}
