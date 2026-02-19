import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <Section>
      <h1 className="heading-display mb-4">Get in Touch</h1>
      <p className="text-body mb-12 max-w-2xl">
        I'm open to internship and new grad opportunities in software engineering, NLP, and AI. Let's connect.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <ContactForm />
        </div>

        <div className="space-y-6">
          <div className="card-elevated p-6">
            <h2 className="heading-card mb-4">Direct Contact</h2>
            <div className="space-y-3">
              <a href="mailto:amimulehsanzoha@arizona.edu" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={16} className="text-primary" />
                amimulehsanzoha@arizona.edu
              </a>
              <a href="https://www.linkedin.com/in/amimul1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={16} className="text-primary" />
                linkedin.com/in/amimul1
              </a>
              <a href="https://github.com/amimul1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Github size={16} className="text-primary" />
                github.com/amimul1
              </a>
              <a href="https://amimul1.github.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ExternalLink size={16} className="text-primary" />
                amimul1.github.io
              </a>
            </div>
          </div>

          <div className="card-elevated p-6">
            <h2 className="heading-card mb-2">Looking for my resume?</h2>
            <p className="text-small text-sm mb-4">Download my latest resume for a complete overview of my experience and skills.</p>
            <a
              href="/Amimul_Zoha_Resume.docx"
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-ring"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
