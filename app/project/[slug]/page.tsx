import { notFound } from 'next/navigation';
import projectsContent from '../../content/projects.json';
import ProjectCaseStudy from '../sections/ui/ProjectCaseStudy';

export function generateStaticParams() {
  return projectsContent.projects.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projectsContent.projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <ProjectCaseStudy
      title={project.title}
      eyebrow={project.detail.eyebrow}
      lead={project.detail.lead}
      imageUrl={project.imageUrl}
      technologies={project.technologies}
      meta={project.detail.meta}
      kpis={project.detail.kpis as [string, string][]}
      sections={project.detail.sections}
      screens={project.detail.screens}
      prev={project.detail.prev}
      next={project.detail.next}
    />
  );
}
