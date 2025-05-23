import { Footer, Navbar } from "@/components"

const About = () => {
  return (
    <div className='about'>
      {/* <Navbar /> */}
      <div className='container sect-wrap'>
        <div className='intro-banner'>
          <div className='i-b-left'>
            <p>Learn more about us</p>
            <h1>Cilla Healthcare Services</h1>
          </div>
          <div className='i-b-right'>
            {/* Optional content */}
          </div>
        </div>

        <div className='goals'>
          {/* <img src='/collaks-mission-vision.png' /> */}
          <div className='mission-vision'>

            <div className='mission'>
              <h3>Cilla Healthcare Services – <br /> A Legacy of Trust and Excellence</h3>
              <p>
                Cilla Healthcare Services is a leading provider of home care in Alberta, renowned for our commitment to enhancing the quality of life for individuals of all ages. Our team’s expertise lies in delivering compassionate, personalized care that reflects our values of Care, Compassion, Competence, Communication, Courage, and Commitment. We are dedicated to supporting our clients in leading independent and fulfilling lives, while providing the highest standard of home care tailored to their unique needs.
              </p>
            </div>

            <div className='mission'>
              <h3>Meet Our Dedicated Team – <br /> The Heart of Cilla Healthcare Services</h3>
              <p>
                Our team of qualified registered nurses, licensed practical nurses, and certified caregivers is dedicated to providing compassionate, patient-focused care. At Cilla Healthcare Services, we believe that the quality of care depends on the quality of the caregiver, and we are proud to have a team that embodies our core values. With a commitment to excellence, we work tirelessly to ensure that every individual receives the care, dignity, and respect they deserve.
              </p>
            </div>

            <div className='mission'>
              <h3>Mission Statement</h3>
              <p>
                At Cilla Healthcare Services, we provide personalized, compassionate, and high-quality home care that promotes independence and well-being. Rooted in our core values—Care, Compassion, Competence, Communication, Courage, and Commitment—we support individuals of all ages with flexible, professional healthcare in the comfort of their homes.
              </p>
            </div>

            <div className='vision'>
              <h3>Vision Statement</h3>
              <p>
                We strive to be Alberta’s leading home care provider, setting the standard for excellence in patient-centered care. Through innovation and unwavering dedication, we empower individuals to live with dignity, independence, and quality support.
              </p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
