import React, { useRef, useState } from 'react';
import "./contact.css";
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedin, FaPhoneSquareAlt } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import emailjs from "@emailjs/browser";
import { ToastContainer, Flip, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form } from 'formik';
import TextField from '../../components/TextField';
import * as Yup from "yup";
import { motion, useScroll } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const { scrollYProgress } = useScroll();
  const validate = Yup.object({
    from_name: Yup.string()
      .max(20, "should be less than 20 Characters")
      .min(3, "should be more than 3 Characters")
      .required("Required"),
    from_email: Yup.string()
      .email("Email is Invalid")
      .required("Required"),
    from_subject: Yup.string()
      .max(25, "should be less than 15 Characters")
      .min(6, "should be more than 6 Characters")
      .required("Required"),
    message: Yup.string()
      .max(200, "should be less than 200 Characters")
      .min(10, "should be more than 10 Characters")
      .required("Required"),
  })

  const sendEmail = () => {
    emailjs.sendForm('service_axm8bri', 'template_w0gxh8f', form.current, 'iVpxlSAods4H7FO3l')
      .then((result) => {
        toast.success("Wow so easy, thank for contacting!");
        console.log(result);
      }, (error) => {
        toast.error("Server error Please try again later!");
        console.log(error);
      });
  };

  return (
    <section className='contact section'>
      <motion.div
        className="progressBar"
        style={{ scaleX: scrollYProgress }}
      />
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">
            Don't be Shy !
          </h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or oppurtunities to be part of your vision.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelope className='info__icon' />
              <div>
                <span className='info__title'>
                  Mail Me
                </span>
                <h4 className="info__desc">
                  santhoshs4717@gmail.com
                </h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className='info__title'>
                  Call Me
                </span>
                <h4 className="info__desc">
                  +91-8012945121
                </h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a href="https://www.facebook.com/profile.php?id=100022631803062" className="contact__social-link"
              target='_blank'
            >
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/santhosh6/" className="contact__social-link"
              target='_blank'
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/SsandySANTHOSH" className="contact__social-link"
              target='_blank'
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <Formik
          initialValues={{
            from_name: "",
            from_email: "",
            from_subject: "",
            message: ""
          }}
          validationSchema={validate}
          onSubmit={((values, { resetForm }) => {
            sendEmail(values);
            resetForm({ values: '' });
          })}
        >
          {
            formik => (
              <Form ref={form} className="contact__form">
                <div className="form__input-group">
                  <TextField name="from_name" placeholder="Your Name" type="text" />
                  <TextField name="from_email" placeholder="Your Email" type="email" />
                  <TextField name="from_subject" placeholder="Your Subject" type="text" />
                </div>
                <div className="form__input-div">
                  <TextField name="message" placeholder="Your Message" type="textarea" />
                </div>
                <button type='submit' className="button">
                  Send Message
                  <span className='button__icon contact__button-icon'>
                    <FiSend />
                  </span>
                </button>
              </Form>
            )
          }
        </Formik>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        transition={Flip}
        draggable={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
      />
    </section>
  )
}

export default Contact;