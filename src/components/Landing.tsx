import React, { useEffect } from 'react'
import Room from './Room';

const Landing = () => {
    const [joined, setJoined] = React.useState(false);
     const [localAudioTrack, setLocalAudioTrack] = React.useState<MediaStreamTrack | null>(null);
    const [localVideoTrack, setlocalVideoTrack] = React.useState<MediaStreamTrack | null>(null);
    const videoRef = React.useRef<HTMLVideoElement>(null);

      const getCam = async () => {
        const stream = await window.navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        })
        // MediaStream
        const audioTrack = stream.getAudioTracks()[0]
        const videoTrack = stream.getVideoTracks()[0]
        setLocalAudioTrack(audioTrack);
        setlocalVideoTrack(videoTrack);
        if (!videoRef.current) {
            return;
        }
        videoRef.current.srcObject = new MediaStream([videoTrack])
        videoRef.current.play();
        // MediaStream
    }

    // useEffect(() => {
    //     if (videoRef && videoRef.current) {
    //         getCam()
    //     }
    // }, [videoRef]);
    if(!joined){
        return(
        <div>
         <video autoPlay ref={videoRef}></video>
        <button  onClick={()=>setJoined(!joined)} >Join</button>
        </div>
        )
    }
  return (
    <Room />
  )
}
export default Landing