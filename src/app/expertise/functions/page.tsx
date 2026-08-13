import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import Card from "@/components/ui/Card";
import { functionsCategory } from "@/content/expertise";

export const metadata: Metadata = {
  title: "Specific Functions",
  description: functionsCategory.intro,
};

export default function FunctionsCategoryPage() {
  return (
    <>
      <Hero eyebrow="Expertise" heading={functionsCategory.name} paragraphs={[functionsCategory.intro ?? ""]} />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {functionsCategory.pages.map((page) => (
              <Link key={page.slug} href={`/expertise/functions/${page.slug}`} className="group">
                <Card className="h-full">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                    {page.tagline ?? page.pageTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{page.hook}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read more
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden>
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
