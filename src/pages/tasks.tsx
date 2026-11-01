
import { AnswerBox } from "../assets/components.tsx";
import { tasktexts, finaltasktexts } from "../assets/text.ts";
import './tasks.css';
import { useState } from "react";
import Numerit from '../audiovisualextra/Numerit.m4a';
import startsound from '../audiovisualextra/starsound.mp3';

interface TaskProps {
    solved: boolean;
    onSolve: (taskNumber: number) => void;
}

export function Task1({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task1">
                <h1>Task 1</h1>
                <p>{tasktexts[1].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[1].answer}
                    onSuccess={() => onSolve(1)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task2({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task2">
                <h1>Task 2</h1>
                <p>{tasktexts[2].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[2].answer}
                    onSuccess={() => onSolve(2)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task3({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task3">
                <h1>Task 3</h1>
                <p>{tasktexts[3].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[3].answer}
                    onSuccess={() => onSolve(3)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task4({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task4">
                <h1>Task 4</h1>
                <p>{tasktexts[4].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[4].answer}
                    onSuccess={() => onSolve(4)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task5({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task5">
                <h1>Task 5</h1>
                <p>{tasktexts[5].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[5].answer}
                    onSuccess={() => onSolve(5)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task6({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task6">
                <h1>Task 6</h1>
                <p>{tasktexts[6].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[6].answer}
                    onSuccess={() => onSolve(6)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task7({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task7">
                <h1>Task 7</h1>
                <p>{tasktexts[7].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[7].answer}
                    onSuccess={() => onSolve(7)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task8({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task8">
                <h1>Task 8</h1>
                <p>{tasktexts[8].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[8].answer}
                    onSuccess={() => onSolve(8)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task9({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task9">
                <h1>Task 9</h1>
                <p>{tasktexts[9].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[9].answer}
                    onSuccess={() => onSolve(9)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function FinalTask({onSolve}: {onSolve: () => void}) {
    //add picture to each box

    const audio = new Audio(Numerit);
    const staraudio = new Audio(startsound);

    const [starClick, setStarClick] = useState(0);

    const handleStar = () => {
        const clicks = starClick + 1;
        setStarClick(clicks); 
        if (starClick === 3) {
            staraudio.play().catch(e => console.log("Audio play error:", e));
        }
        if (starClick >= 4) {
            onSolve();
        }
    };

    const playAudio = () => {
        audio.play().catch((error) => {
            // Browsers sometimes block auto-audio until the user interacts, 
            // but since this is inside a direct click handler, it'll work fine!
            console.log("Audio play blocked/errored:", error);
        });
    }

    return (
        <div className="finaltask-container">
            <div className="gift" id="clue0">
                <div className="gifticon">🎁</div>
                <div className="clue">{finaltasktexts[0]}</div>
            </div>
            <div className="gift" id="clue1">
                <div className="gifticon">🎁</div>
                <div className="clue">{finaltasktexts[1]}</div>
            </div>
            <div className="gift" id="clue2">
                <div className="gifticon">🎁</div>
                <div className="clue">{finaltasktexts[2]}</div>
            </div>
            <div className="gift" id="clue3">
                <div className="gifticon">🎁</div>
                <div className="clue">{finaltasktexts[3]}</div>
            </div>
            <div className="gift" id="clue4">
                <div className="gifticon">🎁</div>
                <div className="clue">{finaltasktexts[4]}</div>
            </div>
            <div className="gift" id="clue5">
                <div className="gifticon">🎁</div>
                <div className="clue">{finaltasktexts[5]}</div>
            </div>
            <div className="gift" id="clue6">
                <div className="gifticon">🎁</div>
                <div className="clue">{finaltasktexts[6]}</div>
            </div>
            <div className="gift" id="clue7">
                <div className="gifticon">🎁</div>
                <div className="clue">{finaltasktexts[7]}</div>
            </div>
            <div className="gift" id="clue8">
                <div className="gifticon">🎁</div>
                <div className="clue">{finaltasktexts[8]}</div>
            </div>
            <div className="star" onClick={handleStar}>⭐</div>
            <button className="audiobutton" onClick={playAudio}>▶️</button>
        </div>
    )
}