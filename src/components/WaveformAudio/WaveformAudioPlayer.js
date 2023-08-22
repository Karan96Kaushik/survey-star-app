import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FaPlay, FaPause } from 'react-icons/fa'; // Import icons from react-icons
import './WaveformAudioPlayer.css';

function WaveformAudioPlayer(props) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {

    const dataURL = `data:audio/mp3;base64,${props.audioString}`;
    console.debug(dataURL)

    if (wavesurfer.current) {
        wavesurfer.current.load(dataURL);
    }
}, [props.audioString]);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        responsive: true,
        barWidth: 2,
        height: 60,
        normalize:true,
        waveColor: 'violet',
        progressColor: 'purple',
        barWidth: 2,
        // height:'300px',
      });

      const dataURL = `data:audio/mp3;base64,${props.audioString}`;
      console.debug(dataURL)
      wavesurfer.current.load(dataURL);

      wavesurfer.current.on('play', () => setIsPlaying(true));
      wavesurfer.current.on('pause', () => setIsPlaying(false));
    }

    return () => wavesurfer.current && wavesurfer.current.destroy();
  }, []);

  const handlePlayPause = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
      setIsPlaying(prevState => !prevState);
    }
  };

  return (
    <div className="waveform-container">
      <div id="waveform" ref={waveformRef}></div>
      <button onClick={handlePlayPause} className="play-pause-button">
        {isPlaying ? <FaPause className="play-pause-icon" /> : <FaPlay className="play-pause-icon" />} {/* Use icons here */}
      </button>
    </div>
  );
}

export default WaveformAudioPlayer;
