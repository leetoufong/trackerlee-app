import { useState, useRef, type SubmitEvent } from 'react';
import Button from './Button';

interface Task {
    id: string;
    title: string;
    date: string;
    time: number;
}

const TaskInput = (props: any) => {
    const {handleAddTask} = props;
    const [currentTask, setCurrentTask] = useState<Task>({id: '', title: '', date: '', time: 0});
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmitTask = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (currentTask.title.trim() && currentTask.date.trim() && currentTask.time > 0) {
            handleAddTask(
                {
                    id: `${Math.random().toString(36).slice(2, 9)}${Date.now()}`,
                    title: currentTask.title,
                    date: currentTask.date,
                    time: currentTask.time
                }
            );

            resetTasks();
        }
    };

    const resetTasks = () => {
        formRef.current?.reset();
        setCurrentTask({id: '', title: '', date: '', time: 0});
    };

    const handleTimeConversion = (time: any) => {
        time = time.split(' ');
        let hours: number = 0;
        let minutes: number = 0;

        let hourTicker = time.filter((ticker: string) => ticker.includes('h'));
        let minuteTicker = time.filter((ticker: string) => ticker.includes('m'));

        if (hourTicker.length) {
            hours = parseInt(hourTicker) * 60 * 60 * 1000;
        }

        if (minuteTicker.length) {
            minutes = parseInt(minuteTicker);
            minutes = minutes * 60 * 1000;
        }

        time = hours + minutes;

        return time;
    };

    return (
        <section className="p-10">
            <form className="" action="POST" onSubmit={handleSubmitTask} ref={formRef}>
                <div className="flex flex-row">
                    <div className="flex flex-col mr-4">
                        <label htmlFor="title">Task Title:</label>
                        <input type="text" id="title" className="border p-2 rounded" onChange={(event) => {
                            setCurrentTask((prevTask) => ({
                                ...prevTask,
                                title: event.target.value
                            }));
                        }} placeholder="Task name" />
                    </div>
                    <div className="flex flex-col mr-4">
                        <label htmlFor="date">Date Worked:</label>
                        <input type="date" id="date" className="border p-2 rounded" onChange={(event) => {
                            setCurrentTask((prevTask) => ({
                                ...prevTask,
                                date: new Date(event.target.value).toISOString()
                            }));
                        }} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="time">Amount Worked:</label>
                        <input type="text" id="time" className="border p-2 rounded" onChange={(event) => {
                            setCurrentTask((prevTask) => ({
                                ...prevTask,
                                time: handleTimeConversion(event.target.value)
                            }))
                        }} placeholder="3h 30m" />
                    </div>
                </div>

                <Button type="submit">Add Task</Button>
            </form>
        </section>
    )
}

export default TaskInput;
