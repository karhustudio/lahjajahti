import { gameText } from "../assets/text";
import testiaani from '../audiovisualextra/testiaani.mp3';

const testiaudio = new Audio(testiaani);
testiaudio.volume = 0.4; // Set volume to 50%

export function LandingPage({ onStart }: { onStart: () => void }) {
    return (
        <div className="esittelyteksti">
            <h1>{gameText.name}</h1>
            <p>{gameText.description}</p>
            <p className="ohje">{gameText.f11}</p>
            <button onClick={() => { testiaudio.play().catch(e => console.log("Audio play error:", e)); }}>Testaa äänet painamalla tätä.</button>
            <p className="ohje">Kun ääni toimii ja peli on koko ruudulla, voitte aloittaa.</p>
            <button onClick={onStart}>{gameText.start}</button>
        </div>
    );
}