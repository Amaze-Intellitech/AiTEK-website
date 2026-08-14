import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import PhotoHero from "@/components/ui/PhotoHero";
import HookPageBody from "@/components/ui/HookPageBody";
import CTABand from "@/components/ui/CTABand";
import Button from "@/components/ui/Button";
import { functionsCategory, getCategoryPage } from "@/content/expertise";
import { functionImages } from "@/content/images";

export function generateStaticParams() {
  return functionsCategory.pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getCategoryPage("functions", slug);
  if (!page) return {};
  return {
    title: page.tagline ?? page.pageTitle,
    description: page.hook,
  };
}

export default async function FunctionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getCategoryPage("functions", slug);
  if (!page) notFound();

  return (
    <>
      <PhotoHero
        eyebrow="Functions"
        heading={page.pageTitle}
        paragraphs={[page.tagline ?? ""]}
        image={functionImages[page.slug]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <HookPageBody page={page} />
        </Container>
      </section>

      <CTABand
        heading="Explore the rest of Functions"
        text="Intelligent Factory, Supply Chain Management, Manufacturing Excellence, Smart Operations, Digital Twins, and SAP."
        cta={<Button href="/expertise/functions">View Functions</Button>}
      />
    </>
  );
}
