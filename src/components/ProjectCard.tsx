interface ProjectCardProps {
  title: string;
  description: string;
  onLearnMore?: () => void;
}

export default function ProjectCard({ title, description, onLearnMore }: ProjectCardProps) {
  return (
    <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="h-48 bg-base-300">
        <div className="w-full h-full flex items-center justify-center text-base-content/40">
          Project Image
        </div>
      </figure>
      <div className="card-body">
        <h3 className="card-title text-base-content">{title}</h3>
        <p className="text-base-content/70">{description}</p>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary" onClick={onLearnMore}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
