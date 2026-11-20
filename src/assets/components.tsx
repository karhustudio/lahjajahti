import { useState } from 'react';
import './components.css';
import { vinkit } from './text';
import wrongsound from '../audiovisualextra/wronganswer.wav';

const wrongaudio = new Audio(wrongsound);
wrongaudio.volume = 0.4; // Set volume to 50%

export function AnswerBox( { correctanswer, secondanswer, onSuccess}: { correctanswer: string, secondanswer?: string, onSuccess: () => void } ) {
    const [input, setInput] = useState('');

    const handleFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevents page reload on enter/submit
        const vastaus = input.trim().toLowerCase();
        
        const matched =
            vastaus === correctanswer.trim().toLowerCase() ||
            (secondanswer !== undefined && vastaus === secondanswer.trim().toLowerCase());

        if (matched) {
            onSuccess();
        } else {
            wrongaudio.play().catch(e => console.log("Audio play error:", e));
            setInput('');
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="answerbox" id="answerbox">
            <input 
                type="text" 
                placeholder="Vastaus..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="submit-button">
                🔒
            </button>
        </form>
    );
}

export function CheckAnswer(userAnswer: string, correctAnswer: string): boolean {
    return userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
}

export function GiveTip() {
    const [showTip, setShowTip] = useState(false);
    const [tipCount, setTipCount] = useState(0);

    const countTips = () => {
        setTipCount(prevCount => prevCount + 1);
    }

    const handleTipClick = () => {
        setShowTip(true);
        if (tipCount >= vinkit.length - 1) {
            setTipCount(vinkit.length - 1); // Reset to the first tip if all tips have been shown
        }
    }

    const handleCloseTip = () => {
        setShowTip(false);
        countTips();
    }

    if (showTip) {
        return (
            <div className="tip-popup">
                <p>{vinkit[tipCount].text}</p>
                <button className="close-tip-button" onClick={handleCloseTip}>Sulje</button>
            </div>
        );
    } else {
        return (
            <button className="tip-button" onClick={handleTipClick}>💡</button>
        );
    }
}
