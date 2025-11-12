import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/constants/projects';
import PageSection from '@/components/PageSection';
import SectionHeading from '@/components/SectionHeading';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <PageSection>
      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <Link href="/#projects" className="btn btn-ghost mb-8">
          ← Back to Projects
        </Link>

        {/* Project Header */}
        <div className="max-w-4xl mx-auto">
          <SectionHeading>{project.title}</SectionHeading>
          <p className="text-xl text-base-content/70 mb-8">
            {project.description}
          </p>

          {/* Full Description */}
          {project.fullDescription && (
            <div className="prose max-w-none mb-12">
              <h2 className="text-2xl font-bold mb-4">About This Project</h2>
              <p className="text-base-content/80">{project.fullDescription}</p>
            </div>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="badge badge-primary badge-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-base-content/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          {project.links && (
            <div className="flex gap-4">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </PageSection>
  );
}
