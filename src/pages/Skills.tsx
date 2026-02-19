import Section from "@/components/Section";

const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "C", "JavaScript", "HTML/CSS", "SQL", "Kotlin"],
  },
  {
    category: "ML & AI",
    skills: ["PyTorch", "TensorFlow", "Transformers", "Hugging Face", "LLMs", "LoRA/PEFT", "Quantization", "Fine-tuning", "RAG", "LangChain", "NLTK", "spaCy", "scikit-learn", "Weights & Biases"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Express", "Node.js", "Keras", "Jetpack Compose", "JavaFX", "Lucene"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git/GitHub", "Docker", "AWS", "HPC", "Linux", "Jupyter", "Postman", "Android Studio", "Figma", "VS Code", "Jira", "Trello"],
  },
  {
    category: "Data & Databases",
    skills: ["MongoDB", "SQL", "Pandas", "NumPy", "Matplotlib"],
  },
];

const Skills = () => {
  return (
    <Section>
      <h1 className="heading-display mb-4">Skills</h1>
      <p className="text-body mb-12 max-w-2xl">
        Technical skills derived from coursework, research, and industry experience.
      </p>

      <div className="space-y-10">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h2 className="heading-card text-base mb-4 text-primary">{group.category}</h2>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="card-elevated px-4 py-2.5 text-sm font-medium text-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
