import { useState } from 'react'
import './App.css'
import TaskInput from './components/TaskInput';
import Calendar from './components/Calendar';

function App() {
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
            <main className="h-full lg:grid lg:grid-cols-12" role="main">
                <aside className="lg:col-span-2 bg-green-500 p-5" role="contentinfo">
                    <h1 className="text-2xl text-white">Tracker<span className="font-bold">lee</span></h1>
                </aside>

                <div className="lg:col-span-10 w-full p-5">
                    <header>
                        <TaskInput tasks={tasks} setTasks={setTasks} />
                    </header>

                    <ul>
                        {tasks?.map((task: { id: string; title: string; date: string; time: number }) => {
                            return (
                                <li key={task.id}>
                                    {task.title} / {task.date} / {task.time} <button>Edit</button>
                                </li>
                            )
                        })}
                    </ul>

                    {/* <Calendar /> */}
                </div>
            </main>
        </>
    )
}

export default App
