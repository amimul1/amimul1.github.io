import Section from "@/components/Section";
import ExperienceItem from "@/components/ExperienceItem";

const experiences = [
  {
    title: "Graduate Research Assistant",
    organization: "Deep Target NLP Lab, University of Arizona",
    location: "Tucson, AZ",
    dates: "Jan 2025 – Present",
    bullets: [
      "Building a privacy-preserving clinical NLP/LLM pipeline to detect Valley Fever phenotypes from EHR text; curated a 1,200-sentence challenge test set with implicit symptoms and medical jargon.",
      "Comparing encoder-only clinical transformers (BioClinical ModernBERT) with quantized local LLMs (MedGemma, Llama) for deployment on institutional hardware.",
      "Running end-to-end experiments on UArizona HPC and NSF Jetstream2; shared dynamic few-shot prompting and quantization best practices across lab projects.",
      "Preprint submitted to IEEE-ICHI on fine-tuning BERT with privacy-preserving LLM-labeled synthetic training data.",
    ],
    tags: ["Python", "PyTorch", "NLP", "HPC", "LLMs"],
  },
  {
    title: "Vice President & Co-Founder",
    organization: "UA AI Club",
    location: "Tucson, AZ",
    dates: "Aug 2024 – Present",
    bullets: [
      "Co-founded and lead a 100+ member student organization focused on AI education and hands-on experience.",
      "Organized faculty talks and technical workshops on LoRA fine-tuning, RAG pipelines, local LLM inference, and chatbot development.",
      "Represented the club at UArizona Hackathon and university events.",
    ],
    tags: ["Leadership", "AI", "Community"],
  },
  {
    title: "Student AI Engineer & Teaching Specialist",
    organization: "AI Core, ICDI",
    location: "Tucson, AZ",
    dates: "May 2024 – Dec 2024",
    bullets: [
      "Developed LLM-powered applications and chatbots for clients using LangChain with RAG and agentic architectures.",
      "Instructed 4-week CustomGPTs and WebAPI training bootcamp for 40 interns; led summer intern projects.",
      "Tracked and managed API costs and intern team productivity.",
    ],
    tags: ["LangChain", "RAG", "LLMs", "Teaching"],
  },
  {
    title: "Software Development Intern",
    organization: "American Express GBT",
    location: "Chicago, IL",
    dates: "Summer 2023",
    bullets: [
      "Added Sustainability banner to the Android app Rail Search experience with CO₂ emission data using Kotlin, Java, and XML.",
      "Integrated Egencia satellite service to serve CO₂ data to Android and iOS apps via REST API with Jackson Library.",
      "Implemented reusable Jetpack Compose 'Callout Card' component following Egencia Design System conventions.",
    ],
    tags: ["Kotlin", "Java", "Android", "REST API"],
  },
  {
    title: "Teaching Assistant",
    organization: "University of Arizona",
    location: "Tucson, AZ",
    dates: "Aug 2021 – Dec 2023",
    bullets: [
      "Led a section of 20 students solving Python and Java problems; conducted office hours for code debugging.",
      "Evaluated programming assignments, developed test cases, and provided code feedback.",
      "Conducted 50+ interviews during TA hiring and mentored students through feedback meetings.",
    ],
    tags: ["Python", "Java", "Teaching", "Mentoring"],
  },
];

const Experience = () => {
  return (
    <Section>
      <h1 className="heading-display mb-4">Experience</h1>
      <p className="text-body mb-12 max-w-2xl">
        Research, engineering, and leadership roles spanning clinical NLP, AI systems, mobile development, and education.
      </p>
      <div className="max-w-3xl">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.title + exp.organization} {...exp} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
