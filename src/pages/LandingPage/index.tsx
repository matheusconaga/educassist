import Why from "@/widget/LandingPageSections/Why";
import Hero from "../../widget/LandingPageSections/Hero";
import How from "@/widget/LandingPageSections/How";
import Much from "@/widget/LandingPageSections/Much";
import Pain from "@/widget/LandingPageSections/Pain";
import Barrier from "@/widget/LandingPageSections/Barrier";
import Pioneer from "@/widget/LandingPageSections/Pioneer";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-10 bg-background">
      <Hero />
      <Pain />
      <Why />
      <How />
      <Barrier />
      <Pioneer/>
      <Much />
    </div>
  );
}
