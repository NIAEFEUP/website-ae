import { Metadata } from "next";
import { getPayload } from 'payload';
import config from 'payload.config';
import WelcomeClientPage from "./client";

export const metadata: Metadata = {
  title: "Welcome",
  description: "Bem-vindo à FEUP!",
};

const WelcomePage = async () => {
  const payload = await getPayload({ config });
  const videos = (await payload.find({
    collection: "video",
  })).docs

  return <WelcomeClientPage videos={videos} />
};

export default WelcomePage;
