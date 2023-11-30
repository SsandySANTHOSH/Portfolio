import React from 'react';
import Info from '../../components/Info';
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedin, FaPhoneSquareAlt } from 'react-icons/fa';
import Stats from '../../components/Stats';
import { FaDownload } from 'react-icons/fa';
import CV from "../../assets/resume.pdf";
import "./about.css"
import Skills from '../../components/Skills';
import { resume, certificate } from '../../data';

import ResumeItem from '../../components/ResumeItem';
import { Fade, Zoom } from 'react-awesome-reveal';
import { motion, useScroll } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  return (
    <main className="section container">
      <motion.div
        className="progressBar"
        style={{ scaleX: scrollYProgress }}
      />
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">
              Personal Info
            </h3>
            <ul className="info__list grid">
              <Info />
            </ul>
            <a href="https://drive.google.com/file/d/1gAlBQsWrG48Tlm_W8_IHViwsMyh2tbW4/view?usp=drive_link" download="" className="button">
              View CV <span className='button__icon'>
                {/* <FaDownload /> */}
              </span>
            </a>
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
          <Fade direction='up' duration={500} triggerOnce='true'>
            <Zoom duration={500} triggerOnce='true'>
              <div className="stats grid">
                <Stats />
              </div>
            </Zoom>
          </Fade>
        </div>
      </section>
      <div className="separator"></div>
      <div className="skills">
        <h3 className="section__subtitle subtitle__center">
          My Skills
        </h3>
        <div className="skills__container grid">
          <Skills />
        </div>
      </div>
      <div className="separator">

      </div>
      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
           Certification
        </h3>
        <div className="resume__container">
          <div className="resume__data">
            {
              certificate.map((val) => {
                if (val.category === "certification") {
                  return <ResumeItem key={val.id} {...val} />
                }
              })
            }
            
          </div>
          
          {/* <div className="resume__data">
            {
              resume.map((val) => {
                if (val.category === "education") {
                  return <ResumeItem key={val.id} {...val} />
                }
              })
            }
          </div> */}
        </div>
      </section>
      <div className="separator">
        
      </div>
      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
           Education
        </h3>
        <div className="resume__container">
          <div className="resume__data">
            {
              resume.map((val) => {
                if (val.category === "education") {
                  return <ResumeItem key={val.id} {...val} />
                }
              })
            }
            
          </div>
          
          {/* <div className="resume__data">
            {
              resume.map((val) => {
                if (val.category === "education") {
                  return <ResumeItem key={val.id} {...val} />
                }
              })
            }
          </div> */}
        </div>
      </section>
    </main>
  )
}

export default About