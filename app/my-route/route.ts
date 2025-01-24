import configPromise from '@payload-config'
import { getPayload } from 'payload'

async function getUsers() {
  if(process.env.IS_BUILD) {
     console.log('skipping getProjects DB call during build')
     return []
  }

  const payload = await getPayload({
    config: configPromise,
  })
  const data = await payload.find({
    collection: 'users',
  })
  return data
}

export const GET = async () => {
  const data = await getUsers()
  return Response.json(data)
}