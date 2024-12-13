"use client"

import { useEffect, useState } from 'react';

export default function SpotifyPlayer() {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = 'fc78ed1beff24fa4a836403ec40c0d9c';
      const player = new Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: (cb) => cb(token),
        volume: 0.5,
      });

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.connect();
      setPlayer(player);
    };
  }, []);

  return (
    <div>
      <h1>Spotify Player</h1>
      {player ? <p>Player is ready!</p> : <p>Loading Spotify Player...</p>}
    </div>
  );
}
