import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, ArrowRight, GraduationCap, Brain, Award, Briefcase } from "lucide-react";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

const featuredProjects = [
  {
    title: "Valley Fever Symptom Extractor",
    description: "Clinical NLP pipeline achieving >90% precision on Valley Fever symptoms from EHR sentences using fine-tuned BioClinicalModernBERT with synthetic training data.",
    tags: ["Python", "NLTK", "BioBERT", "LLMs", "NLP"],
    github: "https://github.com/amimul1",
  },
  {
    title: "Jeopardy IR QA Engine",
    description: "Lucene-based retriever over 100K Wiki pages with GPT-4o-mini reranking, boosting P@1 and MRR to ≈0.53.",
    tags: ["Java", "Lucene", "BM25", "GPT-4o"],
    github: "https://github.com/amimul1",
  },
  {
    title: "Multi-Label Emotion Classification",
    description: "CNN for multi-label emotion detection achieving 0.83 micro-F1 on 7-class text classification with threshold optimization.",
    tags: ["Python", "Keras", "CNN", "NLP"],
    github: "https://github.com/amimul1",
  },
  {
    title: "Disease Prediction ML",
    description: "KNN, Kernelized KNN (RBF), and Logistic Regression from scratch for heart disease prediction — best accuracy 87.78%.",
    tags: ["Python", "scikit-learn", "ML"],
    github: "https://github.com/amimul1",
  },
];

const highlights = [
  { icon: GraduationCap, label: "BS-MS Computer Science", detail: "University of Arizona · May 2026 · GPA 3.87" },
  { icon: Brain, label: "NLP & Clinical AI", detail: "Research on LLMs, clinical NLP, privacy-preserving pipelines" },
  { icon: Award, label: "100+ Member AI Club", detail: "Co-founded & VP of UA AI Club" },
  { icon: Briefcase, label: "Industry Experience", detail: "American Express GBT · AI Core · Research" },
];

const recentExperience = [
  {
    title: "Graduate Research Assistant",
    org: "Deep Target NLP Lab, University of Arizona",
    dates: "Jan 2025 – Present",
    summary: "Building privacy-preserving clinical NLP/LLM pipeline for Valley Fever phenotype detection from EHR text.",
  },
  {
    title: "VP & Co-Founder",
    org: "UA AI Club",
    dates: "Aug 2024 – Present",
    summary: "Leading a 100+ member student org with technical workshops on fine-tuning, RAG, and local LLM inference.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="section-spacing pt-24 md:pt-32">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary font-medium text-sm mb-3 tracking-wide uppercase">Hello, I'm</p>
            <h1 className="heading-display mb-4">
              Amimul Ehsan Zoha
            </h1>
            <p className="text-body text-lg md:text-xl max-w-2xl mb-8">
              CS student at the University of Arizona building clinical NLP pipelines, LLM systems, and ML tools — focused on health AI and impactful software.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/Amimul_Zoha_Resume.docx"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-ring"
              >
                <Download size={16} /> Download Resume
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-border text-foreground hover:bg-secondary transition-colors focus-ring"
              >
                <Mail size={16} /> Contact
              </Link>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://github.com/amimul1" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-ring" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/amimul1" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-ring" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <Section>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <motion.div key={h.label} variants={item} className="card-elevated p-5">
              <h.icon className="text-primary mb-3" size={22} />
              <h3 className="heading-card text-sm mb-1">{h.label}</h3>
              <p className="text-small text-xs">{h.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="heading-section">Featured Projects</h2>
          <Link to="/projects" className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      {/* Recent Experience */}
      <Section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="heading-section">Recent Experience</h2>
          <Link to="/experience" className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {recentExperience.map((exp) => (
            <div key={exp.title} className="card-elevated p-6">
              <h3 className="heading-card mb-1">{exp.title}</h3>
              <p className="text-sm text-primary font-medium mb-1">{exp.org}</p>
              <p className="text-small text-xs mb-3">{exp.dates}</p>
              <p className="text-small text-sm">{exp.summary}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Index;
