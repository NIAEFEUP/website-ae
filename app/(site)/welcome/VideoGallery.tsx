'use server'

import { YouTubeEmbed } from '@next/third-parties/google'

export async function VideoGallery() {

    return (<div className="grid-rows-4">
        <div className="row-span-1 m-4">
            <YouTubeEmbed videoid="dQw4w9WgXcQ" height={400} width={720} />
        </div>
        <div className="row-span-1 m-4">
            <iframe
                src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
        </div>
        <div className="row-span-1 m-4">
            <iframe
            src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
        </div>
            <div className="row-span-1 m-4">
            <iframe
            src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
        </div>
        </div>)


}