import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import PhotoHero from "@/components/ui/PhotoHero";
import HookPageBody from "@/components/ui/HookPageBody";
import CTABand from "@/components/ui/CTABand";
import Button from "@/components/ui/Button";
import { consultingCategory, getCategoryPage } from "@/content/expertise";
import { consultingImages } from "@/content/images";

export function generateStaticParams() {
  return consultingCategory.pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getCategoryPage("consulting", slug);
  if (!page) return {};
  return {
    title: page.tagline ?? page.pageTitle,
    description: page.hook,
  };
}

export default async function ConsultingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getCategoryPage("consulting", slug);
  if (!page) notFound();

  return (
    <>
      <PhotoHero
        eyebrow="Consulting"
        heading={page.pageTitle}
        paragraphs={[page.tagline ?? ""]}
        image={consultingImages[page.slug]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <HookPageBody page={page} />
        </Container>
      </section>

      <CTABand
        heading="Explore the rest of Consulting"
        text="Business Process, Management, IT, and Digital & AI Transformation consulting — see how they fit together."
        cta={<Button href="/expertise/consulting">View Consulting</Button>}
      />
    </>
  );
}
