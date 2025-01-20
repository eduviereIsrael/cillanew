
"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Faq, Footer, Navbar } from "@/components";
import Marquee from "react-fast-marquee"
import { Paragraph } from "@/components";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Home() {


  const services = [
    {
      title: "Alzheimer’s and Dementia Care",
      description:
        "This involves specialized support and services designed to meet the unique needs of individuals living with Alzheimer’s disease or other forms of dementia.",
      image: "/a-a-d-c.webp",
      slug: "alzheimers-and-dementia-care"
    },
    {
      title: "Companionship Service",
      description:
        "Our companionship service integrates daily living support with engaging companionship, offering a holistic approach to emotional, physical, and mental care.",
      image: "/c-s.webp",
      slug: "companionship-service"
    },
    {
      title: "Foot Care",
      description:
        "This involves specialized services aimed at maintaining the health and comfort of an individual’s feet.",
      image: "/f-c.webp",
      slug: "foot-care"
    },
    {
      title: "Nursing Care",
      description:
        "This encompasses a range of professional services provided by registered nurses and licensed practical nurses to manage and support patients’ health and well-being.",
      image: "/n-c.webp",
      slug: "nursing-care"
    },
    {
      title: "Palliative and End-of-Life Care",
      description:
        "This refers to specialized medical and supportive services aimed at improving the quality of life for individuals with serious, life-limiting illnesses.",
      image: "/p-a-e-o-l-c.webp",
      slug: "palliative-and-end-of-life-care"
    },
    {
      title: "Personal Hygiene",
      description:
        "Personal care involves support with essential activities of daily living, including washing, bathing, and dressing.",
      image: "/p-h.webp",
      slug: "personal-hygiene"
    },
    {
      title: "Respite Care",
      description:
        "Cilla Healthcare Services provides temporary relief for primary caregivers by offering short-term, professional care for individuals who need ongoing support.",
      image: "/r-c.webp",
      slug: "respite-care"
    },
    {
      title: "Safeguard Visits",
      description:
        "These are scheduled check-ins designed to ensure the safety and well-being of individuals receiving care.",
      image: "/s-v.webp",
      slug: "safeguard-visits"
    },
    {
      title: "Transportation Services",
      description:
        "Cilla Healthcare Services provide essential support for individuals who need assistance getting to and from various destinations.",
      image: "/t-s.webp",
      slug: "transportation-services"
    },
  ];
  
  

  const container = useRef(null);
  const image = useRef(null);

  const { scrollYProgress } = useScroll({

      target: container,

      offset: ['start end', 'end start']

  })

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const md = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const lg = useTransform(scrollYProgress, [0, 1], [0, -400]);



  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="container">
        <motion.div 
        animate={{ height: 0, y:-600 }}
        transition={{ delay: 1, type: "spring" }}
        className="bg-hero"></motion.div>
          <motion.h1 transition={{delay: 1.3, type: "spring", duration: 1}} initial={{y:80, opacity:0}} whileInView={{y: 0, opacity: 1}} >
            Providing exceptional care for you and your loved ones in the
            comfort of your home
          </motion.h1>
          <motion.button transition={{delay: 1.5, type: "spring", duration: 1}} initial={{y:80, opacity:0}} whileInView={{y: 0, opacity: 1}}  className="pri-btn">Contact Us</motion.button>
        </div>
      </div>

      <div className="brief">
        <div className="container">
          <div className="left">
            <motion.img initial={{y: 60}} whileInView={{y:0}} transition={{type: "spring", duration: 1}}  src="/brief-left.webp" alt="" />
       
            <Paragraph paragraph={`At Cilla Healthcare Services, we are committed to providing exceptional home care across Alberta.`} />
          </div>
          <div className="right">
            <motion.img initial={{y: 60}} whileInView={{y:0}}  transition={{delay: 0.1, type: "spring", duration: 1}} src="/brief-right.webp" alt="" />
         
            <Paragraph paragraph={`Our patient-centered approach prioritizes personalized care with a focus on our core values: Care, Compassion, Competence, Communication, Courage, and Commitment.`} />
          </div>
        </div>
      </div>

      <div className="services">
        <img src="/shadowss.svg" className="shadows" alt="" />
        <div className="shadow-cont">

        </div>
        <div className="container">
          {/* <h2>
            We provide personalized, compassionate care for individuals of all
            ages, including seniors, individuals with disabilities, and those
            managing various health conditions.
          </h2> */}
          <Paragraph paragraph={`We provide personalized, compassionate care for individuals of all ages, including seniors, individuals with disabilities, and those managing various health conditions.`} />
        </div>
        <Marquee style={{alignItems: "flex-start", display: "flex"}} pauseOnHover={true}>
 
            <div className="contain">

            {services.map((service, index) => (
              <div key={index} className="card">
                {/* <img src={service.image} alt="" /> */}
                <img src={service.image} alt="" />


                  <div className="content">
                <Link href={`/service/${service.slug}`}>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                </Link>
                  </div>
              </div>
            ))}
            </div>
        </Marquee>
      </div>

      <div className="the-company">
        <div className="container">
          <h2>Meet the company</h2>
          <h4>Who We Are</h4>
          <div className="about-section">
            <div className="who-we-are">
              <p>
                Cilla Healthcare Services is redefining home care across Alberta
                with a patient-centered approach grounded in the principles of
                Care, Compassion, Competence, Communication, Courage, and
                Commitment.
              </p>
              <p>
                We deliver flexible, compassionate care to individuals of all
                ages, including seniors, individuals with disabilities, and
                those with various health conditions.
              </p>
            </div>
            <div className="commitment">
              {/* <h2></h2> */}
              <p>
                We are committed to enhancing the quality of life for our
                service users through personalized compassionate care.
              </p>
              <p>
                Our team of rigorously screened and highly trained registered
                nurses, licensed practical nurses, and certified caregivers
                exemplifies these core values, positioning Cilla Healthcare
                Services as Alberta&apos;s leading choice for home care.
              </p>
            </div>
          </div>
        </div>

       
      </div>

      <div className="banners" ref={container} >
        <div className="container">
          <motion.div className="branding"  >
            <img src="/banner-img-1.webp" alt="" />
            <div className="content" style={{height: image.current?.clientHeight}} >

            <div className="logo">
              {/* <p>Logo</p> */}
              <img src="/cilla.svg" alt="logo" className="logo" />

            </div>
            <div className="text">
              {/* <h2>
                We are dedicated to supporting you with the highest quality of
                care.
              </h2> */}
              <Paragraph paragraph={`We are dedicated to supporting you with the highest quality of care.`} />
              <button className="contact-button">Contact us</button>
            </div>
            </div>
          </motion.div>
            <motion.img ref={image} style={{top: md}}  src="/banner-img-1.webp" alt="Caregiver assisting senior" />
            <motion.img style={{top: lg}}  src="/banner-img-2.webp" className="remove" alt="Family outside home" />
        </div>
      
      </div>

      <div className="banners-mobile">
        <div className="container">
          <div className="branding">
            <div className="logo">
              <p>Logo</p>
            </div>
            <div className="text">
              {/* <h2>
                We are dedicated to supporting you with the highest quality of
                care.
              </h2> */}
              <Paragraph paragraph={`We are dedicated to supporting you with the highest quality of care.`} />
              <button className="contact-button">Contact us</button>
            </div>
          </div>
            <img src="/banner-img-1.webp" alt="Caregiver assisting senior" />
            <img src="/banner-img-2.webp" className="remove" alt="Family outside home" />
        </div>
      
      </div>

      <Faq />

      <Footer />

      
    </div>
  );
}
