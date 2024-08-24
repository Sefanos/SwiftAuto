'use client'
import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import {
  FileUploaderRegular,
  UploadCtxProvider
} from "@uploadcare/react-uploader"
import "@uploadcare/react-uploader/core.css"

type Props = {
  onUpload: (e: string) => any
}


const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()
  const uploaderRef = useRef < InstanceType < UploadCtxProvider > | null > (null);

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl)
      if (file) {
        router.refresh()
      }
    }
    if (uploaderRef.current) {
      uploaderRef.current.addEventListener('file-upload-success', handleUpload)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <FileUploaderRegular ctxName='my-upload' apiRef={uploaderRef} pubkey="0ce08eeadf87e9060f6f"/>
    </div>
  )
}

export default UploadCareButton