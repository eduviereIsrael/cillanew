

import Image from "next/image";
import styles from "./page.module.css";
import { Faq, Footer, Navbar } from "@/components";
import Marquee from "react-fast-marquee"
import { Paragraph } from "@/components";

export default function Home() {
  const services = [
    {
      title: "Alzheimer’s and Dementia Care",
      description:
        "This involves specialized support and services designed to meet the unique needs of individuals living with Alzheimer’s disease or other forms of dementia.",
      image: "",
    },
    {
      title: "Companionship Service",
      description:
        "Our companionship service integrates daily living support with engaging companionship, offering a holistic approach to emotional, physical, and mental care.",
      image: "",
    },
    {
      title: "Foot Care",
      description:
        "This involves specialized services aimed at maintaining the health and comfort of an individual’s feet.",
      image: "",
    },
    {
      title: "Nursing Care",
      description:
        "This encompasses a range of professional services provided by registered nurses and licensed practical nurses to manage and support patients’ health and well-being.",
      image: "",
    },
    {
      title: "Palliative and End-of-Life Care",
      description:
        "This refers to specialized medical and supportive services aimed at improving the quality of life for individuals with serious, life-limiting illnesses.",
      image: "",
    },
    {
      title: "Personal Hygiene",
      description:
        "Personal care involves support with essential activities of daily living, including washing, bathing, and dressing.",
      image: "",
    },
    {
      title: "Respite Care",
      description:
        "Cilla Healthcare Services provides temporary relief for primary caregivers by offering short-term, professional care for individuals who need ongoing support.",
      image: "",
    },
    {
      title: "Safeguard Visits",
      description:
        "These are scheduled check-ins designed to ensure the safety and well-being of individuals receiving care.",
      image: "",
    },
    {
      title: "Transportation Services",
      description:
        "Cilla Healthcare Services provide essential support for individuals who need assistance getting to and from various destinations.",
      image: "",
    },
  ];



  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="container">
          <h1>
            Providing exceptional care for you and your loved ones in the
            comfort of your home
          </h1>
          <button className="pri-btn">Contact Us</button>
        </div>
      </div>

      <div className="brief">
        <div className="container">
          <div className="left">
            <img src="/brief-left.webp" alt="" />
            {/* <h3>
              At Cilla Healthcare Services, we are committed to providing
              exceptional home care across Alberta.
            </h3> */}
            <Paragraph paragraph={`At Cilla Healthcare Services, we are committed to providing exceptional home care across Alberta.`} />
          </div>
          <div className="right">
            <img src="/brief-right.webp" alt="" />
            {/* <h3>
              Our patient-centered approach prioritizes personalized care with a
              focus on our core values: Care, Compassion, Competence,
              Communication, Courage, and Commitment.
            </h3> */}
            <Paragraph paragraph={`Our patient-centered approach prioritizes personalized care with a focus on our core values: Care, Compassion, Competence, Communication, Courage, and Commitment.`} />
          </div>
        </div>
      </div>

      <div className="services">
        <img src="/shadows.svg" className="shadows" alt="" />
        <div className="container">
          {/* <h2>
            We provide personalized, compassionate care for individuals of all
            ages, including seniors, individuals with disabilities, and those
            managing various health conditions.
          </h2> */}
          <Paragraph paragraph={`We provide personalized, compassionate care for individuals of all ages, including seniors, individuals with disabilities, and those managing various health conditions.`} />
        </div>
        <Marquee style={{alignItems: "flex-start", display: "flex"}} pauseOnHover={true}>
          {/* <div className="card">
              <img src="/c-s.webp" alt="" />
              <div className="content">

                <h4>Companionship Service</h4>
                <p>Our companionship service integrates daily living support with engaging companionship, offering a
                holistic approach to emotional, physical, and mental care.</p>
              </div>
            </div> */}
            <div className="contain">

            {services.map((service, index) => (
              <div key={index} className="card">
                {/* <img src={service.image} alt="" /> */}
                <img src="/c-s.webp" alt="" />

                <div className="content">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
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

      <div className="banners">
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
