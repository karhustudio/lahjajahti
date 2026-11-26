import './end.css';
import winmusic from '../audiovisualextra/winmusic.mp3';
import { wintexts } from '../assets/text';
import { useEffect } from "react";

const winmusicaudio = new Audio(winmusic);
winmusicaudio.volume = 0.2; // Set volume to 50%s

export function End() {
    useEffect(() => {
        const timer = setTimeout(() => {
            winmusicaudio.play().catch(e => console.log("Audio play error:", e));
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="esittelyteksti">
            <div className='end'>
                <p>{wintexts.text}</p>
                <p>{wintexts.lahjat}</p>
            </div>
        </div>
    );
}