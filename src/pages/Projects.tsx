import { useState } from "react";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

const allProjects = [
  {
    title: "Valley Fever Symptom Extractor",
    description: "Multi-label clinical NLP pipeline achieving >90% precision on 10 Valley Fever symptoms from EHR sentences. Fine-tuned BioClinicalModernBERT encoder with a synthetic data generation framework using GPT-5.",
    tags: ["Python", "NLP", "BioBERT", "LLMs", "PyTorch"],
    github: "https://github.com/amimul1",
  },
  {
    title: "Jeopardy IR QA Engine",
    description: "Lucene-based retriever over 100K Wiki pages with custom analyzer. Added GPT-4o-mini reranking on top-20 candidates, boosting P@1 and MRR to ≈0.53.",
    tags: ["Java", "Lucene", "BM25", "NLP"],
    github: "https://github.com/amimul1",
  },
  {
    title: "Multi-Label Emotion Classification",
    description: "CNN for multi-label emotion detection achieving 0.83 micro-F1 on a 7-class text classification task with threshold optimization and W&B tuning.",
    tags: ["Python", "Keras", "CNN", "NLP"],
    github: "https://github.com/amimul1",
  },
  {
    title: "Disease Prediction",
    description: "Applied KNN, Kernelized KNN (RBF), and Logistic Regression from scratch to predict heart disease. Kernelized KNN achieved best accuracy at 87.78%.",
    tags: ["Python", "ML", "scikit-learn"],
    github: "https://github.com/amimul1",
  },
  {
    title: "Dependency Parser",
    description: "Transition-based parser with SVM-learned oracle over stack & buffer features. Reached 61.9% Unlabeled Attachment Score on the UD treebank.",
    tags: ["Python", "NLP", "ML"],
    github: "https://github.com/amimul1",
  },
  {
    title: "FitGuide Android App",
    description: "Java/XML fitness app with Firebase database, secure login, workout tracking, interactive guides, and meal plans. Built using Scrum methodology.",
    tags: ["Java", "Android", "Firebase"],
    github: "https://github.com/amimul1",
  },
  {
    title: "Operating System Kernel",
    description: "Functional OS kernel built from scratch in C with process control, communication mechanisms, and device management using the USLOSS library in Docker.",
    tags: ["C", "OS", "Docker"],
    github: "https://github.com/amimul1",
  },
  {
    title: "Socialite: Social Media App",
    description: "Full-stack social media website with Express backend, HTML/CSS/JS frontend with Fetch API, and MongoDB database.",
    tags: ["JavaScript", "Express", "MongoDB", "Web"],
    github: "https://github.com/amimul1",
  },
  {
    title: "Log Structured File System",
    description: "FUSE file system on Linux Kernel using C implementing log-structured storage with segment cleaning.",
    tags: ["C", "Linux", "Systems"],
    github: "https://github.com/amimul1",
  },
  {
    title: "DIY Resume Master",
    description: "Resume optimization tool using local LLMs with Ollama, GPT-4o, Selenium, and LaTeX for automated resume generation.",
    tags: ["Python", "LLMs", "Web"],
    github: "https://github.com/amimul1",
  },
];

const allTags = Array.from(new Set(allProjects.flatMap((p) => p.tags))).sort();

const Projects = () => {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filtered = activeTags.length === 0
    ? allProjects
    : allProjects.filter((p) => activeTags.some((t) => p.tags.includes(t)));

  return (
    <Section>
      <h1 className="heading-display mb-4">Projects</h1>
      <p className="text-body mb-8 max-w-2xl">A selection of academic and personal projects spanning NLP, machine learning, systems programming, and full-stack development.</p>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors focus-ring ${
              activeTags.includes(tag)
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-secondary text-secondary-foreground border-border hover:border-primary/30"
            }`}
          >
            {tag}
          </button>
        ))}
        {activeTags.length > 0 && (
          <button
            onClick={() => setActiveTags([])}
            className="px-3 py-1.5 text-xs font-medium rounded-full text-muted-foreground hover:text-foreground transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No projects match the selected filters.</p>
      )}

      {/* Publication */}
      <div className="mt-16">
        <h2 className="heading-section mb-6">Research & Publications</h2>
        <div className="card-elevated p-6">
          <p className="tag-pill-primary text-xs mb-3 inline-block">Preprint · IEEE-ICHI</p>
          <h3 className="heading-card mb-2">Fine-Tuning BERT with Privacy-Preserving LLM-Labeled Synthetic Training Data</h3>
          <p className="text-small text-sm">An Application to Valley Fever Symptom Extraction. Submitted for publication at IEEE International Conference on Healthcare Informatics.</p>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
