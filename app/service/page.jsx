// app/services/page.tsx
'use client';
import React from "react";
import Link from "next/link";
import { Footer } from "../../components";

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
  }
];

export default function ServicesPage() {
  return (
    <div className="services-container">
        <div className="container">

      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Explore the range of compassionate care we provide.</p>
      </section>

      <section className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <div className="service-content">
              <Link href={`/service/${service.slug}`}>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </Link>
            </div>
          </div>
        ))}
      </section>
        </div>
        <Footer />
    </div>
  );
}
