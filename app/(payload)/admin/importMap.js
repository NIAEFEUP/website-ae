import { S3ClientUploadHandler as S3ClientUploadHandler_f97aa6c64367fa259c5bc0567239ef24 } from '@payloadcms/storage-s3/client'
import { VercelBlobClientUploadHandler as VercelBlobClientUploadHandler_16c82c5e25f430251a3e3ba57219ff4e } from '@payloadcms/storage-vercel-blob/client'
import { CollectionCards as CollectionCards_ab83ff7e88da8d3530831f296ec4756a } from '@payloadcms/ui/rsc'

export const importMap = {
  "@payloadcms/storage-s3/client#S3ClientUploadHandler": S3ClientUploadHandler_f97aa6c64367fa259c5bc0567239ef24,
  "@payloadcms/storage-vercel-blob/client#VercelBlobClientUploadHandler": VercelBlobClientUploadHandler_16c82c5e25f430251a3e3ba57219ff4e,
  "@payloadcms/ui/rsc#CollectionCards": CollectionCards_ab83ff7e88da8d3530831f296ec4756a
}
