import { useState } from 'react'
import './App.css'
import TaskInput from './components/TaskInput';

function App() {
    const [currentTask, setCurrentTask] = useState<string>('');
    const [currentDate, setCurrentDate] = useState<string>('');
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [tasks, setTasks] = useState([
        {
            id: 'pn00la8- 1778687953108',
            title: 'Walk the dog',
            date: '2026-05-03T00:00:00.000Z',
            time: 8100000
        }
    ]);

    return (
        <>
            <h1>Trackerlee</h1>

            <TaskInput currentTask={currentTask} currentDate={currentDate} currentTime={currentTime} setCurrentTask={setCurrentTask} setCurrentDate={setCurrentDate} setCurrentTime={setCurrentTime} tasks={tasks} setTasks={setTasks} />

            <ul>
                {tasks?.map((task) => {
                    return (
                        <li key={task.id}>
                            {task.title} / {task.date} / {task.time} <button>Edit</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default App
