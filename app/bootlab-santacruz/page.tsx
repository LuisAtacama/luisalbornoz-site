import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/portfolio/Breadcrumbs";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import styles from "./bootlab.module.css";

export const metadata: Metadata = {
  title: "BootLab Santa Cruz · Alrededor del fuego | Luis Albornoz",
  description: "BootLab abierto de Alrededor del fuego en Santa Cruz: un laboratorio con Luis Albornoz para crear presentaciones memorables. Fecha propuesta: 25 de noviembre de 2026.",
  alternates: { canonical: "/bootlab-santacruz", languages: { es: "/bootlab-santacruz", "x-default": "/bootlab-santacruz" } },
  robots: { index: false, follow: true },
  openGraph: {
    title: "BootLab Santa Cruz · Alrededor del fuego",
    description: "Un laboratorio práctico para trabajar una presentación real. Fecha propuesta: 25 de noviembre de 2026.",
    url: "/bootlab-santacruz",
    images: [{ url: "/projects/alrededor-del-fuego/portada-ampliada.png", alt: "Alrededor del fuego: presentaciones memorables que inspiran a la acción" }],
  },
};

export default function BootLabSantaCruzPage() {
  return (
    <div className={`editorial-page ${styles.page}`}>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <SiteHeader />
      <main id="contenido" className="standalone-project standalone-project--bootlab-santacruz">
        <Breadcrumbs items={[
          { href: "/", label: "Inicio" },
          { href: "/conferencias/alrededor-del-fuego", label: "Alrededor del fuego" },
          { label: "BootLab Santa Cruz" },
        ]} />
        <article>
          <header className="standalone-project__hero">
            <figure className="standalone-project__cover">
              <Image src="/projects/alrededor-del-fuego/portada-ampliada.png" alt="Alrededor del fuego: presentaciones memorables que inspiran a la acción" fill priority sizes="(max-width: 900px) 100vw, 58vw" quality={90} />
            </figure>
            <div className="standalone-project__heading">
              <p className="eyebrow">Alrededor del fuego / Taller abierto</p>
              <h1>BootLab Santa Cruz</h1>
              <p className={styles.subtitle}>Presentaciones memorables que inspiran a la acción.</p>
              <dl className="standalone-project__meta">
                <div><dt>Fecha propuesta</dt><dd>25 de noviembre de 2026</dd></div>
                <div><dt>Ciudad</dt><dd>Santa Cruz de la Sierra, Bolivia</dd></div>
                <div><dt>Creación y conducción</dt><dd>Luis Albornoz, en colaboración con catalytic-A</dd></div>
              </dl>
              <a className={styles.action} href="#preinscripcion">Información de preinscripción <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </header>
          <section className="standalone-project__text" aria-labelledby="bootlab-about">
            <p className="eyebrow">El laboratorio</p>
            <div>
              <h2 className="sr-only" id="bootlab-about">Un laboratorio para tus ideas</h2>
              <p>Una buena presentación empieza por saber qué queremos decir y qué necesita quien nos escucha. En este BootLab trabajarás sobre una idea real para darle claridad, estructura y una forma de contarla que conecte con tu audiencia.</p>
              <p>La edición abierta de Alrededor del fuego en Santa Cruz combina ejercicios prácticos, conversación y devolución sobre las presentaciones de quienes participan.</p>
            </div>
          </section>
          <section className="standalone-project__origin" aria-labelledby="bootlab-method">
            <p className="eyebrow">Metodología</p>
            <div>
              <h2 id="bootlab-method">De la idea al relato.</h2>
              <p>Definir el propósito: reconocer qué quieres comunicar y qué esperas movilizar en tu audiencia.</p>
              <p>Construir el relato: ordenar las ideas, encontrar un hilo narrativo y quitar lo que distrae.</p>
              <p>Presentar y revisar: poner tu exposición en práctica y recibir recomendaciones para seguir desarrollándola.</p>
            </div>
          </section>
          <section className="standalone-project__resources" aria-labelledby="bootlab-audience">
            <p className="eyebrow">Para quién</p>
            <div>
              <h2 id="bootlab-audience">Ideas que necesitan llegar a otros.</h2>
              <ul>
                <li>Profesionales y emprendedores que presentan proyectos, propuestas o iniciativas.</li>
                <li>Personas de organizaciones, fundaciones y equipos que buscan comunicar con mayor claridad.</li>
                <li>No necesitas experiencia escénica: el punto de partida es una idea o presentación propia.</li>
              </ul>
            </div>
          </section>
          <section id="preinscripcion" className="standalone-project__contact" aria-labelledby="bootlab-registration">
            <p className="eyebrow">Próxima edición</p>
            <div>
              <h2 id="bootlab-registration">Nos vemos en Santa Cruz.</h2>
              <p className={styles.copy}>La fecha propuesta es el 25 de noviembre. Estamos coordinando los detalles con catalytic-A; aquí se publicará el formulario de preinscripción cuando esté disponible.</p>
              <p className={styles.copy}>Si quieres recibir información mientras tanto, puedes escribirnos.</p>
              <a href="mailto:hola@luisalbornoz.cl?cc=luisalbornoz%40gmail.com&subject=BootLab%20Santa%20Cruz">Consultar por el BootLab <ArrowUpRight size={15} aria-hidden="true" /></a>
              <p className={styles.note}>La consulta no constituye una reserva de cupo.</p>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
