import { Hero } from "@/components/hero";
import { TeamComponent } from "@/components/team";
import { AboutComponent } from "@/components/about";
import { ClientsComponent } from "@/components/clients";
import { ContactComponent } from "@/components/contact";
import { PricingComponent } from "@/components/pricing";
import { ServicesComponent } from "@/components/services";
import { CommitmentsComponent } from "@/components/commitments";
import { TestimonialsComponent } from "@/components/testimonials";

const Page = () => {
  return (
    <div className="">
      <Hero />
      <div className="min-h-screen bg-[#FAFAFA] text-black flex justify-center">
        <div className="w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <AboutComponent />
          <ServicesComponent />
          <CommitmentsComponent />
          <TeamComponent />
          <TestimonialsComponent />
          <ClientsComponent />
          <PricingComponent />
          <ContactComponent />
        </div>
      </div>
    </div>
  );
};

export default Page;
