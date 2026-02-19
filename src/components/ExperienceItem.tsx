interface ExperienceItemProps {
  title: string;
  organization: string;
  location?: string;
  dates: string;
  bullets: string[];
  tags?: string[];
}

const ExperienceItem = ({ title, organization, location, dates, bullets, tags }: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      {/* Timeline line */}
      <div className="absolute left-[7px] top-2 bottom-0 w-px bg-border group-last:hidden" />
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background" />

      <div className="card-elevated p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
          <div>
            <h3 className="heading-card">{title}</h3>
            <p className="text-sm text-primary font-medium">{organization}{location ? ` · ${location}` : ""}</p>
          </div>
          <span className="text-small text-xs whitespace-nowrap">{dates}</span>
        </div>
        <ul className="space-y-2 mb-3">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-small text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/30">
              {bullet}
            </li>
          ))}
        </ul>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span key={tag} className="tag-pill text-xs">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
