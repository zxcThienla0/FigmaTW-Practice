import Video from "./videoFooter.webm"
import VideoPoser from "./VideoPoster.webp"

export default function VideoFooter() {
    return (
        <div className="relative w-full h-70 sm:h-150 overflow-hidden bg-black">
            <video
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-full h-full object-cover block"
                src={Video}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster={VideoPoser}
            />
        </div>
    )
}