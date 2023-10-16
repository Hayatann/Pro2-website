import { useRef, useEffect } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

type Props = {
  reverseImg: boolean
  imgSrc: string
}

export default function VideoPlayer(props: Props) {
  const videoRef = useRef(null)
  const playerRef = useRef(null)

  return (
    <>
      <section className="my-64">
        <div className="container">
          <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
            {!props.reverseImg ? <Media className="rounded-lg" src={props.imgSrc} /> : ''}
            <div className="space-content flex flex-col justify-center">
              <slot />
            </div>
            {props.reverseImg ? <Media className="rounded-lg" src={props.imgSrc} /> : ''}
          </div>
        </div>
        <videojs />
      </section>
    </>
  )
}
