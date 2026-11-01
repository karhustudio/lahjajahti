import { useState } from 'react';
import './grid.css';
import { FinalTask, Task1, Task2, Task3, Task4, Task5, Task6, Task7, Task8, Task9 } from './tasks';
import { GiveTip } from '../assets/components';
import tasksolvedsound from '../audiovisualextra/taksksolved4.mp3';
import alltasksolvedsound from '../audiovisualextra/alltaskssolved.mp3';

const tasksolvedaudio = new Audio(tasksolvedsound);
const alltasksolvedaudio = new Audio(alltasksolvedsound);
tasksolvedaudio.volume = 0.4; // Set volume to 50%
alltasksolvedaudio.volume = 0.4; // Set volume to 50%

export function Grid({ onFinish }: { onFinish: () => void }) {

    const [solvedCount, setSolvedCount] = useState(0);
    const [zoomed, setZoomed] = useState(0); // 0 = grid, 1-9 = specific task
    const [solvedTasks, setSolvedTasks] = useState<boolean[]>(Array(9).fill(false));

    const handleTaskSolved = (taskNumber: number) => {
        tasksolvedaudio.play().catch(e => console.log("Audio play error:", e));
        setSolvedTasks(prev => {
            const newSolved = [...prev];
            newSolved[taskNumber - 1] = true;
            return newSolved;
        });
        setZoomed(0);
        setSolvedCount(prev => prev + 1);
    };

    const handleZoom = (task: number) => {
        if (zoomed === 0) {
            setZoomed(task);
        } else {
            setZoomed(0);
        }
    };

    // 1. Final Task Screen
    if (solvedCount >= 9) {
        alltasksolvedaudio.play().catch(e => console.log("Audio play error:", e));
        return (
            <FinalTask onSolve={onFinish}/>
        );
    }

    // 2. Zoomed View (Tasks 1 - 9)
    if (zoomed !== 0) {
        return (
            <div className="zoomed">
                <button className="suurennuslasi suurennettu" onClick={() => handleZoom(zoomed)}>➖</button>
                
                {zoomed === 1 && <Task1 solved={solvedTasks[0]} onSolve={handleTaskSolved} />}
                {zoomed === 2 && <Task2 solved={solvedTasks[1]} onSolve={handleTaskSolved} />}
                {zoomed === 3 && <Task3 solved={solvedTasks[2]} onSolve={handleTaskSolved} />}
                {zoomed === 4 && <Task4 solved={solvedTasks[3]} onSolve={handleTaskSolved} />}
                {zoomed === 5 && <Task5 solved={solvedTasks[4]} onSolve={handleTaskSolved} />}
                {zoomed === 6 && <Task6 solved={solvedTasks[5]} onSolve={handleTaskSolved} />}
                {zoomed === 7 && <Task7 solved={solvedTasks[6]} onSolve={handleTaskSolved} />}
                {zoomed === 8 && <Task8 solved={solvedTasks[7]} onSolve={handleTaskSolved} />}
                {zoomed === 9 && <Task9 solved={solvedTasks[8]} onSolve={handleTaskSolved} />}
            </div>
        );
    }

    // 3. Grid View (Default)
    return (
        <div className="grid">
            <div className="box">
                {!solvedTasks[0] && <button className="suurennuslasi" onClick={() => handleZoom(1)}>🔍</button>}
                <Task1 solved={solvedTasks[0]} onSolve={handleTaskSolved} />
            </div> 
            <div className="box">
                {!solvedTasks[1] && <button className="suurennuslasi" onClick={() => handleZoom(2)}>🔍</button>}
                <Task2 solved={solvedTasks[1]} onSolve={handleTaskSolved} />
            </div>
            <div className="box">
                {!solvedTasks[2] && <button className="suurennuslasi" onClick={() => handleZoom(3)}>🔍</button>}
                <Task3 solved={solvedTasks[2]} onSolve={handleTaskSolved} />
            </div>
            <div className="box">
                {!solvedTasks[3] && <button className="suurennuslasi" onClick={() => handleZoom(4)}>🔍</button>}
                <Task4 solved={solvedTasks[3]} onSolve={handleTaskSolved} />
            </div>
            <div className="box">
                {!solvedTasks[4] && <button className="suurennuslasi" onClick={() => handleZoom(5)}>🔍</button>}
                <Task5 solved={solvedTasks[4]} onSolve={handleTaskSolved} />
            </div>
            <div className="box">
                {!solvedTasks[5] && <button className="suurennuslasi" onClick={() => handleZoom(6)}>🔍</button>}
                <Task6 solved={solvedTasks[5]} onSolve={handleTaskSolved} />
            </div>
            <div className="box">
                {!solvedTasks[6] && <button className="suurennuslasi" onClick={() => handleZoom(7)}>🔍</button>}
                <Task7 solved={solvedTasks[6]} onSolve={handleTaskSolved} />
            </div>
            <div className="box">
                {!solvedTasks[7] && <button className="suurennuslasi" onClick={() => handleZoom(8)}>🔍</button>}
                <Task8 solved={solvedTasks[7]} onSolve={handleTaskSolved} />
            </div>
            <div className="box">
                {!solvedTasks[8] && <button className="suurennuslasi" onClick={() => handleZoom(9)}>🔍</button>}
                <Task9 solved={solvedTasks[8]} onSolve={handleTaskSolved} />
            </div>

            <button className="skip-button" onClick={() => setSolvedCount(9)}>Skip to final task</button>
            <div><GiveTip /></div>
        </div>
    );
}