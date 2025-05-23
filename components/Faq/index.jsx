"use client";

import React, { useState } from "react";

const Faq = () => {
  const [clickedFaqs, setClickedFaq] = useState([]);
  const toggleFaq = (x) => {
    let clickedFaq = clickedFaqs.includes(x);

    if (!clickedFaq) {
      setClickedFaq([...clickedFaqs, x]);
    } else {
      let newClickedFaq = clickedFaqs.filter((faq) => faq !== x);
      setClickedFaq([...newClickedFaq]);
    }
  };

  const Faqs = [
    {
      question: "What services does Cilla Healthcare Services provide?",
      answer:
        "We offer flexible home care services to individuals of all ages, including seniors, individuals with disabilities, and those with various health conditions.",
    },
    {
      question: "How do you ensure the quality of care provided?",
      answer:
        "Our team consists of rigorously screened and highly trained registered nurses, licensed practical nurses, and certified caregivers to ensure high-quality, personalized care.",
    },
    {
      question: "Are your caregivers available 24/7?",
      answer:
        "Yes, we provide flexible care options, including 24/7 support to meet the diverse needs of our service users.",
    },
    {
      question: "How do you personalize care plans for each individual?",
      answer:
        "We create personalized care plans by assessing the unique needs of each individual, ensuring that their care is tailored to their preferences and health requirements.",
    },
    {
      question: "Can I choose my caregiver?",
      answer:
        "Yes, we match caregivers based on the individual’s needs and preferences, ensuring compatibility and a high level of comfort.",
    },
    {
      question: "What areas in Alberta do you serve?",
      answer:
        "We provide home care services across multiple regions in Alberta, ensuring that quality care is accessible to a wide range of individuals.",
    },
    {
      question: "Do you offer short-term care services?",
      answer:
        "Yes, we offer both short-term and long-term care services to meet the varying needs of our clients, from temporary recovery care to ongoing support.",
    },
    {
      question: "What is your approach to senior care?",
      answer:
        "Our senior care is rooted in compassion, providing assistance with daily living activities, companionship, and health management to enhance the quality of life.",
    },
    {
      question: "How do I get started with your services?",
      answer:
        "To get started, simply contact us for a consultation. We’ll assess your needs and develop a personalized care plan that works best for you or your loved one.",
    }
  ];
  
  return (
    <div className="faq">
      <div className="container">
        <div className="faq-heading">
          <h2>Frequently Asked Questions</h2>
          <p>We have answered some of your questions</p>

          <div className="faq-cont">
            {Faqs.map((item, i) => (
              <div
                className={
                  clickedFaqs.includes(i) ? "faq-card faq-show" : "faq-card"
                }
                key={i}
              >
                <div
                  className="f-c-header"
                  onClick={() => {
                    toggleFaq(i);
                  }}
                >
                  <span>{item.question}</span>
                  <img src="/faq.svg" alt="faq" />
                </div>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
