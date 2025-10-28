import { Metadata } from "next";
import { getPayload } from 'payload';
import config from 'payload.config';
import ArraialClientPage from "./client";

export const dynamicParams = true
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Arraial D'Engenharia 2025",
  description:
    "A maior festa de receção aos novos estudantes — 29, 30 e 31 outubro. EXPONOR. Compra já os teus bilhetes na BOL ou na secretaria da AEFEUP.",
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

async function getBusAccounts() {
  if (process.env.IS_BUILD) {
    console.log('skipping getBusAccounts DB call during build')
    return []
  }
  const payload = await getPayload({ config });
  const busAccounts = (await payload.find({
    collection: "busAccount",
    limit: 100,
  })).docs;

  return busAccounts.map(account => ({
    busId: account.busId,
    name: account.name || `Autocarro ${account.busId}`,
    line: account.line,
  }));
}

async function getBusSchedules() {
  if (process.env.IS_BUILD) {
    console.log('skipping getBusSchedules DB call during build')
    return []
  }
  const payload = await getPayload({ config });
  const schedules = (await payload.find({
    collection: "busSchedule",
    limit: 1000,
    sort: 'departureTime',
  })).docs;

  const normalizeBus = (b: any) => {
    if (b == null) return null;
    if (typeof b === 'object') {
      const busId = String(b.busId);
      const name = b.name ?? `Autocarro ${busId}`;
      return { busId, name };
    }
    const num = String(b);
    return { busId: num, name: `Autocarro ${num}` };
  };

  return schedules.map((s: any) => ({
    ...s,
    bus: normalizeBus(s.bus),
  }));
}
const ArraialPage = async () => {
  const artistsVideos = await getArtistsVideos();
  const photobank = await getPhotobank();
  const busAccounts = await getBusAccounts();
  const busSchedules = await getBusSchedules();

  return (
    <ArraialClientPage
      artistsVideos={artistsVideos}
      photobank={photobank}
      busAccounts={busAccounts}
      busSchedules={busSchedules}
    />
  );
};


export default ArraialPage;