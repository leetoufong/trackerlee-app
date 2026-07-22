import { useState } from 'react'
import './App.css'
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

interface Task {
    id: string|number; // UUID of said task
    title: string; // Name/Title of task
    date: string; // Date task was completed
    time: number; // Amount of time task was worked on
};

function App() {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 'pn00la81778687953108',
            title: 'Walk the dog',
            date: '2026-05-03T00:00:00.000Z',
            time: 8100000
        }
    ]);

    const handleAddTask = (task: Task) => {
        if (task) setTasks([...tasks, task]);
    }

    return (
        <>
            <main className="h-full lg:grid lg:grid-cols-12 text-left" role="main">
                <aside className="lg:col-span-2 bg-green-500 p-5" role="contentinfo">
                    <h1 className="text-2xl text-white">Tracker<span className="font-bold">lee</span></h1>
                </aside>

                <div className="lg:col-span-10 w-full">
                    <TaskInput handleAddTask={handleAddTask} />

                    <TaskList taskList={tasks} />

                    {/* <Calendar /> */}
                </div>
            </main>
        </>
    )
}

export default App
