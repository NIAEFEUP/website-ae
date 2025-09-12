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

async function getVideos() {
  if (process.env.IS_BUILD) {
    console.log('skipping getVideos DB call during build')
    return []
  }

  const payload = await getPayload({ config });
  const videos = (await payload.find({
    collection: "video",
  })).docs

  return videos
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
  const videos = await getVideos();
  const mentoringLinks = await getMentoringLinks();

  return <WelcomeClientPage videos={videos} mentoringLinks={mentoringLinks} />
};

export default WelcomePage;
