import { Metadata } from "next";
import { getPayload } from 'payload';
import config from 'payload.config';
import ArraialClientPage from "./client";

export const metadata: Metadata = {
  title: "Arraial D'Engeharia 2025",
  description:
    "A maior festa de recepção aos novos estudantes — 29, 30 e 31 outubro. EXPONOR. Compra já os teus bilhetes na BOL ou na secretaria da AEFEUP.",
};

async function getArtistsVideos() {
  if (process.env.IS_BUILD) {
    console.log('skipping getArtistsVideos DB call during build')
    return []
  }
  const payload = await getPayload({ config });
  const informativeVideos = (await payload.find({
    collection: "artist-video",
  })).docs

  return informativeVideos
}

async function getPhotobank() {
  if (process.env.IS_BUILD) {
    console.log('skipping getPhotobank DB call during build')
    return null
  }
  const payload = await getPayload({ config });
  const photobank = await payload.findGlobal({
    slug: "photobank",
  });
  return photobank;
}

const ArraialPage = async () => {
  const artistsVideos = await getArtistsVideos();
  const photobank = await getPhotobank();
  return <ArraialClientPage artistsVideos={artistsVideos} photobank={photobank} />
};

export default ArraialPage;