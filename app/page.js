import FeaturedProjects from "./_components/FeaturedProjects";
import Features from "./_components/Features";
import FinalCTA from "./_components/FinalCTA";
import Hero from "./_components/Hero";
import OurClients from "./_components/OurClients";
import Services from "./_components/Services";

function page() {
  return (
    <div>
      <Hero />
      <Services />
      <Features />
      <FeaturedProjects />
      <OurClients />
      <FinalCTA />
    </div>
  );
}

export default page;
