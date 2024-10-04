import { Metadata } from "next";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import { getPayload } from 'payload'
import config from 'payload.config'

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};

const Home = async() => {

  const sponsors = await (await getPayload({ config })).find({
    collection: 'sponsor',
  });

  return (
    <main>
      <Hero />
      <Sponsors sponsors={sponsors.docs.filter(sponsor => sponsor.name)} />
    </main>
  );
}

export default Home;