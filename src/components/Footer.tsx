import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display font-semibold text-foreground">Amimul Ehsan Zoha</p>
            <p className="text-small mt-1">CS BS-MS @ University of Arizona</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/amimul1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-ring"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/amimul1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-ring"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:amimulehsanzoha@arizona.edu"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-ring"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://amimul1.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-ring"
              aria-label="Personal site"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-small text-xs">© {new Date().getFullYear()} Amimul Ehsan Zoha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
