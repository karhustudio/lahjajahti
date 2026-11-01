import { useState } from 'react';
import './components.css';
import { vinkit } from './text';
import wrongsound from '../audiovisualextra/wronganswer.wav';

const wrongaudio = new Audio(wrongsound);
wrongaudio.volume = 0.4; // Set volume to 50%

export function AnswerBox( { correctanswer, onSuccess}: { correctanswer: string, onSuccess: () => void } ) {
    const [input, setInput] = useState('');

    const handleFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevents page reload on enter/submit
        const iscorrect = CheckAnswer(input, correctanswer);
        if (iscorrect) {
            onSuccess();
        } else {
            wrongaudio.play().catch(e => console.log("Audio play error:", e));
            setInput(''); // Clear input on wrong answer
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="answerbox">
            <input 
                type="text" 
                placeholder="Vastaus..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="submit-button">
                Submit
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
