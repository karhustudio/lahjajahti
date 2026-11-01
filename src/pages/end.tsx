import './end.css';
import winmusic from '../audiovisualextra/winmusic.mp3';

const winmusicaudio = new Audio(winmusic);
winmusicaudio.volume = 0.2; // Set volume to 50%s

export function End() {
    winmusicaudio.play().catch(e => console.log("Audio play error:", e));

    return (
        <div className="end">
            <h1>Peli on ohi. Voititte jälleen kerran.</h1>
        </div>
    );
}
