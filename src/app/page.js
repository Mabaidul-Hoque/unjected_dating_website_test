import { Appdownload, Connection, FAQ, Footer, Header, HeroImageSection, Ourmission, Realprofile, ResponsiveLayout, Speeddating, SuccesStories } from "@/components";

export default function Home() {
  
  return (
    <div className="min-h-screen min-w-screen flex justify-start items-center flex-col">
      <Header />

      <HeroImageSection />

      <Ourmission />

      <Realprofile />

      <Speeddating />

      <ResponsiveLayout />

      <SuccesStories />

      <FAQ />
    
      <Appdownload />

      <Connection />

      <Footer />
      
    </div>
 
  );
}
