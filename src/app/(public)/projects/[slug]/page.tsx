import { ProjectLandingPreview } from "@/features/landing-pages/components/project-landing-preview";

interface ProjectLandingPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ProjectLandingPage = async ({ params }: ProjectLandingPageProps) => {
  const { slug } = await params;

  return <ProjectLandingPreview slug={slug} />;
};

export default ProjectLandingPage;
