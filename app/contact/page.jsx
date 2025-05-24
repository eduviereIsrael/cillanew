import { Footer, ContactForm } from "../../components"
export default function Contact() {
  return (
    <>      <div className="contact-us-page">
        <div className="hero-section">
          <div className="container">
            <h1>We Would Love to Hear From You</h1>
            <p>Reach out to us with any questions or inquiries about our healthcare services</p>
          </div>
        </div>

        <div className="container">
          <div className="contact-content">
            <div className="form-section">
              <h2>Get in Touch</h2>
              <p>Fill out the form below and we&apos;ll get back to you as soon as possible</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </>
  )
}
