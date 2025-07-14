import { Metadata } from "next"
import { getPayload } from "payload"
import RequestPageContent from "./client"
import config from "payload.config"

export const revalidate = 10
export const dynamicParams = true
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Cedências de Espaço",
  description: "Envia solicitações para reservas de espaço para eventos ou pedidos de material",
}

async function getMaterialData() {
  if (process.env.IS_BUILD) {
    console.log('skipping getProjects DB call during build')
    return []
  }

  const payload = await getPayload({ config });

  const materialData = (await payload.find({
    collection: "material",
  })).docs

  return materialData
}

async function getRegulation() {
  if (process.env.IS_BUILD) {
    console.log('skipping getProjects DB call during build')
    return []
  }

  const payload = await getPayload({ config });

  const regulation = (await payload.find({
    collection: "docfile",
    limit: 1,
    where: {
      type: { equals: "regulation" },
    },
  })).docs;

  return regulation;
}

async function getAvailableSpaces() {
  if (process.env.IS_BUILD) {
    console.log('skipping getProjects DB call during build')
    return []
  }

  const payload = await getPayload({ config });
  const availableSpaces = (await payload.find({
    collection: "space",
  })).docs

  return availableSpaces
}

export default async function Request() {
  const calendarID = process.env.GOOGLE_CALENDAR_ID
  const calendarApiKey = process.env.GOOGLE_CALENDAR_API_KEY

  const materialData = await getMaterialData()
  const availableSpaces = await getAvailableSpaces()
  const regulation = await getRegulation()

  return (
    <RequestPageContent
      calendarID={calendarID}
      calendarApiKey={calendarApiKey}
      materialData={materialData}
      availableSpaces={availableSpaces}
      regulation={regulation.length > 0 ? regulation[0] : undefined}
    />
  );
}
