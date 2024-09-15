import { AboutComponent } from "@/components/about";
import { ClientsComponent } from "@/components/clients";
import { CommitmentsComponent } from "@/components/commitments";
import { ContactComponent } from "@/components/contact";
import { FooterComponent } from "@/components/footer";
import Hero from "@/components/hero";
import NavbarComponent from "@/components/navbar";
import { ServicesComponent } from "@/components/services";
import { TeamComponent } from "@/components/team";
import { TestimonialsComponent } from "@/components/testimonials";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-black flex justify-center">
      <div className="w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <NavbarComponent />
        <Hero />
        <AboutComponent />
        <ServicesComponent />
        <CommitmentsComponent />
        <TeamComponent />
        <TestimonialsComponent />
        <ClientsComponent />
        <ContactComponent />
        <FooterComponent />
      </div>
    </div>
  );
};

export default Page;