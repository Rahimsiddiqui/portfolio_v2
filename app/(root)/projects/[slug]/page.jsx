import { projects } from "@/constants";
import { notFound } from "next/navigation";
import ProjectContent from "@/sections/projects/ProjectContent";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let project = projects.find((p) => p.allRounder === slug);
  if (!project) project = projects.find((p) => p.allRounder === "all-rounder") || projects[0];

  return {
    title: `${project.title.split("|")[0].trim()} | Rahim Siddiqui`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.allRounder }));
}

const ProjectPage = async ({ params }) => {
  const { slug } = await params;
  let project = projects.find((p) => p.allRounder === slug);
  
  if (!project) {
    project = projects.find((p) => p.allRounder === "all-rounder") || projects[0];
  }

  return <ProjectContent project={project} />;
};

export default ProjectPage;
