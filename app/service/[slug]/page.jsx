import { Footer } from '../../../components';
import React from 'react'

const page = ({params}) => {
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
    
      const careServices = [
        {
          name: "Alzheimer's and Dementia Care",
          description: "Our specialized care services meet the unique needs of individuals living with Alzheimer’s or other forms of dementia, focusing on providing a safe, supportive, and engaging environment.",
          keyAspects: [
            "Personalized care plans",
            "Cognitive support",
            "Behavioral management",
            "Safety measures and daily living assistance",
            "Emotional and family support"
          ],
          img: "a-a-b.webp",
          slug: "alzheimers-and-dementia-care"
        },
        {
          name: "Nursing Care",
          description: "Delivered by registered nurses and licensed practical nurses, our nursing care includes professional health monitoring, medication management, wound care, and support for chronic conditions to ensure optimal quality of life.",
          keyAspects: [
            "Health monitoring and medication management",
            "Chronic disease management",
            "Wound care",
            "Health education",
            "Vital signs monitoring, which includes blood pressure, oxygen saturation level, respiratory rate, temperature, heart rate, and blood glucose level checks"
          ],
          img: "n-c-b.webp",
          slug: "nursing-care"
        },
        {
          name: "Respite Care",
          description: "We offer temporary care solutions, providing relief to primary caregivers while ensuring that loved ones continue to receive high-quality, compassionate care.",
          keyAspects: [
            "Temporary support for caregivers",
            "Personalized care plans",
            "Safe and supportive environments",
            "Emotional and social engagement"
          ],
          img: "r-c-b.webp",
          slug: "respite-care"
        },
        {
          name: "Companionship Service",
          description: "Our companionship service integrates daily living support with emotional and social engagement, offering a holistic approach to mental, physical, and emotional care.",
          keyAspects: [
            "Fall prevention and mobility assistance",
            "Housekeeping, meal preparation, and grocery shopping",
            "Medication prompts and transportation to appointments",
            "Socialization and entertainment"
          ],
          img: "c-s-b.webp",
          slug: "companionship-service"
        },
        {
          name: "Personal Hygiene",
          description: "Our caregivers provide personal care assistance, including bathing, dressing, and grooming, with a focus on ensuring the service user’s safety, comfort, confidence, and the protection of their dignity at all times.",
          keyAspects: [
            "Washing and dressing",
            "Assistance with shaving, hair care, and body moisturizing",
            "Oral care, repositioning, and toileting support"
          ],
          img: "p-h-b.webp",
          slug: "personal-hygiene"
        },
        {
          name: "Palliative and End-of-Life Care",
          description: "We offer compassionate care for individuals with life-limiting conditions, focusing on symptom management, emotional support, and maintaining comfort and dignity during critical times.",
          keyAspects: [
            "Symptom management and personalized care plans",
            "Emotional and psychological support for patients and families",
            "Daily living assistance and coordination of care",
            "Family guidance and bereavement support as required"
          ],
          img: "p-a-b.webp",
          slug: "palliative-and-end-of-life-care"
        },
        {
          name: "Safeguard Visits",
          description: "Regular check-ins designed to ensure the safety and well-being of individuals, providing health assessments and ensuring care plans are properly followed.",
          keyAspects: [
            "Health and safety assessments",
            "Documentation and communication with the service user and their family members",
            "Compliance checks and care coordination"
          ],
          img: "s-v-b.webp",
          slug: "safeguard-visits"
        },
        {
          name: "Transportation Services",
          description: "We provide reliable and safe transportation for medical appointments, errands, and social engagements, ensuring individuals can stay connected with their community.",
          keyAspects: [
            "Transportation to medical appointments and errands",
            "Social engagement outings",
            "Safe, well-maintained vehicles with personal assistance"
          ],
          img: "t-s-b.webp",
          slug: "transportation-services"
        },
        {
          name: "Foot Care",
          description: "Specialized foot care services to maintain the health and comfort of individuals, especially those with chronic conditions or mobility challenges.",
          keyAspects: [
            "Routine foot inspections and nail care",
            "Diabetic foot care and wound management",
            "Skin care and foot hygiene education"
          ],
          img: "f-c-b.webp",
          slug: "foot-care"
        }
      ];
      
      
    const service = careServices.find(serv => serv.slug === params.slug)
  return (
    <div>
        {/* <Navbar /> */}
        <div className="container service-page">
      <div className="service-page__header">
        <h1>{service.name}</h1>
        <button className ="button">Chat With Us →</button>
      </div>
      <div className="service-page__content">
        <div className="service-page__image-wrapper">
          <img src={`/${service.img}`} alt={service.name} className="service-page__image" />
        </div>
        <div className="service-page__details">
          <p className="service-page__description">{service.description}</p>
          <div className="service-page__key-aspects">
            <span className="key-aspects__label">Key Aspects</span>
            <ul className="key-aspects__list">
              {service.keyAspects.map((aspect, index) => (
                <li key={index} className="key-aspects__item">
                  {aspect}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
        <Footer />
    </div>
  )
}

export default page