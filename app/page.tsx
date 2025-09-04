import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/Footer";

export default function Page(){
  return (
    <main id="home">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
