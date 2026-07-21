import { useState, useRef, type SubmitEvent } from 'react';

interface CurrentTask {
    name: string;
    date: string;
    time: number;
}

const TaskInput = (props: any) => {
    const {tasks, setTasks} = props;
    const [currentTask, setCurrentTask] = useState<CurrentTask>({name: '', date: '', time: 0});
    const formRef = useRef<HTMLFormElement>(null);

    const handleTaskSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (currentTask.name.trim() && currentTask.date.trim() && currentTask.time.toString().trim()) {
            setTasks([...tasks, {id: `${Math.random().toString(36).slice(2, 9)}-${Date.now()}`, title: currentTask.name, date: currentTask.date, time: currentTask.time}]);
        }

        if (formRef.current) {
            resetTasks();
        }
    };

    const resetTasks = () => {
        formRef.current?.reset();
        setCurrentTask({name: '', date: '', time: 0});
    };

    const handleTimeConversion = (time: any) => {
        time = time.split(' ');
        let hours = 0;
        let minutes = 0;

        hours = parseInt(time[0].replace(/\D/g, ""));
        hours = hours * 60 * 60 * 1000;

        if (time.length > 1) {
            minutes = parseInt(time[1].replace(/\D/g, ""));
            minutes = minutes * 60 * 1000;
        }

        time = hours + minutes;

        return time;
    };

    return (
        <section className="p-10">
            <form className="" action="POST" onSubmit={handleTaskSubmit} ref={formRef}>
                <div className="flex flex-row">
                    <div className="flex flex-col mr-4">
                        <label htmlFor="title">Task Title:</label>
                        <input type="text" id="title" className="border p-2 rounded" onChange={(event) => {
                            setCurrentTask((prevTask) => ({
                                ...prevTask,
                                name: event.target.value
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
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Task</button>
            </form>
        </section>
    )
}

export default TaskInput;
