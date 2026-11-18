import { Mail, MessageCircle, Phone } from "lucide-react";
import InquiryForm from "./InquiryForm";

function ContactPage() {
  return (
    <main className="page-shell contact-page">
      <section className="contact-intro">
        <p className="eyebrow">Book a demo · Plan a consultation · Discuss a project</p>
        <h1>Tell me what you’d like to work on.</h1>
        <p>Use the form for training, interview preparation, freelancing mentorship, or software development enquiries. Your message is sent to my email for follow-up.</p>
        <div className="contact-methods">
          <a href="mailto:saishashank.pvs@gmail.com"><Mail size={17} /> Email</a>
          <a href="https://wa.me/919483508971" target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a>
          <a href="tel:+919483508971"><Phone size={17} /> Call</a>
        </div>
      </section>
      <InquiryForm />
    </main>
  );
}

export default ContactPage;
