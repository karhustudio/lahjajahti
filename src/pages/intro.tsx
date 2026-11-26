import './intro.css';
import { introtexts } from '../assets/text';

export function Intro( {onStart}: { onStart: () => void }) {
    return (
        <div className="esittelyteksti">
            <div className="intro">
                <p>{introtexts.text1}</p>
                <p>{introtexts.text2}</p>
            </div>
            <div className="ohjeet">
                <p>{introtexts.ohje1}</p>
                <p>{introtexts.ohje2}</p>
            </div>
            <button onClick={onStart}>Seuraava</button>
        </div>
    );
}