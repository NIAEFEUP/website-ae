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

const WelcomePage = async () => {
  const videos = await getVideos()

  return <WelcomeClientPage videos={videos} />
};

export default WelcomePage;
