import './App.css'
import './assets/colors.css'
import { useEffect, useState } from 'react'
import type { State } from './assets/tyypit.ts'
import { LandingPage } from './pages/landingpage.tsx'
import { Intro } from './pages/intro.tsx';
import { Grid } from './pages/grid.tsx';
import { End } from './pages/end.tsx';
import startmusic from './audiovisualextra/startmusic.mp3';

const startmusicaudio = new Audio(startmusic);
startmusicaudio.volume = 0.3; // Set volume to 40%

function App() {
  const [state, setState] = useState<State>("landingpage");

  useEffect(() => {
        if (state === "intro") {
            startmusicaudio.loop = true;
            startmusicaudio.play().catch(e => console.log("Audio play error:", e));
        } else {
            // Optional: pause or stop when leaving the landing page
            startmusicaudio.pause();
            startmusicaudio.currentTime = 0;
        }
    }, [state]);

  if (state === "landingpage") {
    return (
      <LandingPage onStart={() => setState("intro")} />
    );
  } else if (state === "intro") {
    return (
      <Intro onStart={() => setState("grid")} />
    );
  }
  else if (state === "grid") {
    return (
      <Grid onFinish={() => setState("end")} />
    );
  }
  else if (state === "end") {
    return (
      <End />
    );
  }
}

export default App;