import { Metadata } from "next";
import { getPayload } from 'payload';
import config from 'payload.config';
import WelcomeClientPage from "./client";

export const revalidate = 10
export const dynamicParams = true
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Bem-vindo à FEUP",
  description: "Bem-vindo à FEUP!",
};

async function getInformativeVideos() {
  if (process.env.IS_BUILD) {
    console.log('skipping getInformativeVideos DB call during build')
    return []
  }

  const payload = await getPayload({ config });
  const informativeVideos = (await payload.find({
    collection: "informative-video",
  })).docs

  return informativeVideos
}

async function getMentoringLinks() {
  if (process.env.IS_BUILD) {
    console.log('skipping getMentoringLinks DB call during build')
    return []
  }
  const payload = await getPayload({ config });
  const links = (await payload.find({
    collection: "mentoringLinks",
  })).docs;
  return links;
}

const WelcomePage = async () => {
  const informativeVideos = await getInformativeVideos();

  return <WelcomeClientPage informativeVideos={informativeVideos} />
};

export default WelcomePage;
