// Libs
import { useState, useRef, useEffect } from 'react';

interface VideoProps {
  src: string;
  isPlaying: boolean;
}

const Video = ({ src, isPlaying }: VideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying && ref.current) {
      console.log('Calling video.play()');
      ref.current.play();  // Calling these while rendering isn't allowed.
    } else if (!isPlaying && ref.current) {
      console.log('Calling video.pause()');
      ref.current.pause(); // Also, this crashes.
    }
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInline />;
}

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false); 

  return (
    <div className="container-video">
      <button onClick={() => setIsPlaying(!isPlaying)} className="btn-video">
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <Video
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  )
}

export default VideoPlayer;