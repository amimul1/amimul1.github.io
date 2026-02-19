import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const ProjectCard = ({ title, description, tags, github, demo }: ProjectCardProps) => {
  return (
    <div className="card-elevated p-6 flex flex-col h-full">
      <h3 className="heading-card mb-2">{title}</h3>
      <p className="text-small flex-1 mb-4">{description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="tag-pill-primary">{tag}</span>
        ))}
      </div>
      <div className="flex gap-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border text-foreground hover:bg-secondary transition-colors focus-ring"
          >
            <Github size={13} /> Repo
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-ring"
          >
            <ExternalLink size={13} /> Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
