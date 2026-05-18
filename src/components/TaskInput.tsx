import { useState, useRef } from 'react';

const TaskInput = (props: any) => {
    const {tasks, setTasks} = props;
    const [currentTask, setCurrentTask] = useState<string>('');
    const [currentDate, setCurrentDate] = useState<string>('');
    const [currentTime, setCurrentTime] = useState<number>(0);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSettingTasks = (event: FormDataEvent) => {
        event.preventDefault();
        
        if (currentTask.trim() && currentDate.trim() && currentTime.toString().trim()) {
            setTasks([...tasks, {id: `${Math.random().toString(36).slice(2, 9)}-${Date.now()}`, title: currentTask, date: currentDate, time: currentTime}]);
        }

        if (formRef.current) {
            formRef.current.reset();
        }
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

        console.log(hours, minutes);

        time = hours + minutes;
        console.log(time)

        return time;
    }

    return (
        <form action="POST" onSubmit={handleSettingTasks} ref={formRef}>
            <div>
                <label htmlFor="title">Task Title:</label>
                <input type="text" id="title" className="border p-2 rounded" onChange={event => setCurrentTask(event.target.value)} placeholder="Task name" />
            </div>
            <div>
                <label htmlFor="date">Date Worked:</label>
                <input type="date" id="date" className="border p-2 rounded" onChange={event => setCurrentDate(new Date(event.target.value).toISOString())} />
            </div>
            <div>
                <label htmlFor="time">Amount Worked:</label>
                <input type="text" id="time" className="border p-2 rounded" onChange={event => setCurrentTime(handleTimeConversion(event.target.value))} placeholder="3h 30m" />
            </div>
            <button className="bg-green-500 text-white p-2 rounded font-bold" type="submit">Submit</button>
        </form>
    )
}

export default TaskInput;
