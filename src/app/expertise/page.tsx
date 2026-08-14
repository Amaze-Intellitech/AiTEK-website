import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PhotoHero from "@/components/ui/PhotoHero";
import HookPageBody from "@/components/ui/HookPageBody";
import CTABand from "@/components/ui/CTABand";
import Button from "@/components/ui/Button";
import { aiForEnterprise } from "@/content/expertise";
import { aiForEnterpriseImage } from "@/content/images";

export const metadata: Metadata = {
  title: aiForEnterprise.tagline ?? aiForEnterprise.pageTitle,
  description: aiForEnterprise.hook,
};

export default function AiForEnterprisePage() {
  return (
    <>
      <PhotoHero
        eyebrow="Expertise"
        heading={aiForEnterprise.pageTitle}
        paragraphs={[aiForEnterprise.tagline ?? ""]}
        image={aiForEnterpriseImage}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <HookPageBody page={aiForEnterprise} />
        </Container>
      </section>

      <CTABand
        heading="See how our AI capabilities come together"
        text="Explore AI/ML, AI Agents, the Agentic Framework, and the Tools that bring them safely to production."
        cta={<Button href="/solutions">View Solutions</Button>}
      />
    </>
  );
}
