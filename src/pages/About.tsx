import Section from "@/components/Section";
import { GraduationCap, BookOpen } from "lucide-react";

const interests = ["Natural Language Processing", "Clinical NLP", "Large Language Models", "Machine Learning", "Health AI", "Information Retrieval", "Backend Development", "Mobile Computing"];

const About = () => {
  return (
    <>
      <Section>
        <h1 className="heading-display mb-8">About Me</h1>
        <div className="max-w-3xl space-y-4">
          <p className="text-body text-lg">
            I'm Amimul Ehsan Zoha, a BS-MS Computer Science student at the University of Arizona with a 3.87 GPA. My work sits at the intersection of NLP, clinical AI, and responsible language model deployment — I build pipelines that extract meaningful insights from messy, real-world text.
          </p>
          <p className="text-body text-lg">
            Currently, I'm a Graduate Research Assistant in the Deep Target NLP Lab, where I develop privacy-preserving clinical NLP pipelines for Valley Fever phenotype detection. I also co-founded and lead the UA AI Club, a 100+ member community focused on hands-on AI education.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="card-elevated p-6">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-primary" size={22} />
              <h2 className="heading-card">Education</h2>
            </div>
            <h3 className="font-display font-semibold text-foreground">University of Arizona</h3>
            <p className="text-sm text-primary font-medium">BS-MS Computer Science</p>
            <p className="text-small text-sm mt-1">Tucson, AZ · Expected May 2026 · GPA 3.87</p>
          </div>

          {/* Currently Working On */}
          <div className="card-elevated p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-primary" size={22} />
              <h2 className="heading-card">Currently</h2>
            </div>
            <ul className="space-y-2">
              <li className="text-small text-sm">• Building clinical NLP pipeline for Valley Fever detection</li>
              <li className="text-small text-sm">• Comparing encoder-only transformers vs. quantized local LLMs</li>
              <li className="text-small text-sm">• Leading UA AI Club workshops and events</li>
              <li className="text-small text-sm">• Preprint submitted to IEEE-ICHI</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="heading-section mb-6">Interests & Focus Areas</h2>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <span key={interest} className="tag-pill-primary text-sm px-4 py-2">{interest}</span>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="heading-section mb-6">Relevant Coursework</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Algorithms for NLP", "Machine Learning", "Text Retrieval & Web Search", "Neural Networks",
            "Database Design", "Data Structures & Algorithms", "Software Engineering", "Operating Systems",
            "Human-Computer Interaction", "Mobile Computing", "Networking", "Systems Programming & UNIX",
          ].map((course) => (
            <span key={course} className="tag-pill text-sm px-4 py-2">{course}</span>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;
