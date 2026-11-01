import './intro.css';

export function Intro( {onStart}: { onStart: () => void }) {
    return (
        <div className="esittelyteksti">
            <h1>Intro</h1>
            <button onClick={onStart}>Valmis</button>
        </div>
    );
}