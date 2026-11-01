import { notFound } from "next/navigation";
import { StandaloneProjectPage } from "@/components/portfolio/StandaloneProjectPage";
import { getProjectByPath } from "@/data/portfolio";
import { generateMetadata as projectMetadata } from "../../[section]/[slug]/page";

export function generateMetadata() {
  return projectMetadata({
    params: Promise.resolve({ section: "conferencias", slug: "alrededor-del-fuego" }),
  });
}

export default function AlrededorDelFuegoPage() {
  const project = getProjectByPath("/conferencias/alrededor-del-fuego");
  if (!project) notFound();

  return (
    <StandaloneProjectPage
      project={{
        ...project,
        links: [
          { label: "BootLab abierto · Santa Cruz · 25 de noviembre", url: "/bootlab-santacruz" },
          ...project.links.filter((link) => link.url !== "/bootlab-santacruz"),
        ],
      }}
    />
  );
}
