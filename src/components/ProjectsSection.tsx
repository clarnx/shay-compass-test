import PageSection from './PageSection';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Innovation Platform',
    description: 'A cutting-edge platform designed to streamline digital workflows and enhance productivity.',
  },
  {
    title: 'Design System',
    description: 'A comprehensive design system that ensures consistency and scalability across all products.',
  },
  {
    title: 'Mobile Experience',
    description: 'A responsive mobile-first application delivering seamless experiences across all devices.',
  },
];

export default function ProjectsSection() {
  return (
    <PageSection id="projects" backgroundColor="base-200" maxWidth="max-w-7xl">
      <SectionHeading title="Our Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </PageSection>
  );
}
